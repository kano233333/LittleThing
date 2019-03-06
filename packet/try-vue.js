Vue.component('new_walet_content',{
    template:'#new_wallert_content'
});
var vm=new Vue({
    el:'#container',
    data:{
        newWallet:'',
        send:'',
        query:'',
        nav:false,
        password:'',
        aDownload:'',  //下载密钥链接
        newWalletInput:'password',
        key1:true,
        key2:false,
        key3:true,
        key4:false,
        sendKey:'',
        miyaoDetail:false,
        mainTwo:false,
        navList:{
            "n":false,
            "s":false,
            "q":false
        },
        queryDetail:false,
        address:'',
        sendPrice:'',
        sendSelect:'ETH',
        queryKey:'',
        userAddress:'',  //用户地址
        surplus:'',   //余额
        //-----------------
        list:[
                {
                    "time":"2019-9-7",
                    "method":"转入",
                    "price":"12d3",
                    "obj":"asdsada"
                },
                {
                    "time":"2019-9-7",
                    "method":"转入",
                    "price":"12daa3",
                    "obj":"asdsada"
                },
                {
                    "time":"2011-9-7",
                    "method":"转出",
                    "price":"12s3",
                    "obj":"adasdaddddda"
                }
            ]
        //-----------------------
    },
    methods:{
        navShow:function(str){
            this.nav=!this.nav;
            this.mainTwo=true;
            this.navShift(str);
        },
        navBgShow:function(ev){
            ev.target.style.animation='0.5s nav-show forwards';
        },
        navBgHide:function(ev){
            let i;
            for(i in this.navList){
                if(this.navList[i]){
                    break;
                }
            }
            if(i!==ev.target.parentNode.className[0]){
                ev.target.style.animation = '0.5s nav-hide forwards';
            }
        },
        passEye:function(ev){
            var passWord=ev.target;
            if(document.querySelector('#new-password').type==='password'){
                passWord.style.backgroundImage='url("img/not-see.png")';
                this.newWalletInput='text';
            }else{
                passWord.style.backgroundImage='url("img/see.png")';
                this.newWalletInput='password';
            }
        },
        enterDetailClick:function(ev){
            ev.target.parentNode.parentNode.previousSibling.previousSibling.style.display='none';
            var childDiv=ev.target.parentNode.parentNode.getElementsByTagName('div');
            var smallImg=ev.target.parentNode.parentNode.parentNode.previousSibling.previousSibling.getElementsByTagName('img')[0];
            smallImg.style.display='block';
            for(let i=0;i<childDiv.length;i++){
                childDiv[i].style.position='static';
            }
            smallImg.addEventListener('mouseenter',function(){
                ev.target.parentNode.parentNode.style.display='block';
            });
            smallImg.addEventListener('mouseleave',function(){
                ev.target.parentNode.parentNode.style.display='none';
            });
            //------------------
            ev.target.parentNode.parentNode.parentNode.style.height='0';
            var sendDu=ev.target.parentNode.parentNode;
            sendDu.style.display='none';
            sendDu.style.position='absolute';
            sendDu.addEventListener('mouseenter',function(){
                ev.target.parentNode.parentNode.style.display='block';
            });
            sendDu.addEventListener('mouseleave',function(){
                ev.target.parentNode.parentNode.style.display='none';
            });
            var index=parseInt(ev.target.parentNode.className[ev.target.parentNode.className.length-1])-1;

            var detail=ev.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('sendDetail');
            for(let i=0;i<detail.length;i++){
                detail[i].style.display='none';
            }
            detail[index].style.display='block';
        },
        //切换 main 和 nav
        navShift:function(x){   //x 传入的className首字母
            var catalog=document.getElementsByClassName('catalog');
            for(i in this.navList){
                this.navList[i]=false;
            }
            for(let k=0;k<catalog.length;k++) {
                catalog[k].style.animation="0.8s nav-hide forwards";
                //通过className首字母来匹配
                if(catalog[k].parentNode.className.slice(0,1)===x){
                    catalog[k].style.animation="0.8s nav-show forwards";
                    this.navList[x]=true;
                }
            }
        },
        //提示
        promptEnter(){
            var prompt=document.querySelector('.prompt');
            prompt.onmouseenter=function(){
                document.querySelector('.prompt-img').style.opacity='1';
            };
            prompt.onmouseleave=function(){
                document.querySelector('.prompt-img').style.opacity='0.4';
            };

            var promptA=document.querySelectorAll('.prompt-p a');
            var _this=this;
            for(let i=0;i<promptA.length;i++){
                promptA[i].onclick=function(){
                    _this.navShift('s');
                }
            }
        },
        navClick(ev){
            this.renew();
            this.navBgShift(ev.target);
            this.reVisit();
            this.navShift(ev.target.parentNode.className.slice(0,1));
        },
        //重回 生成钱包页面
        renew(){
            this.password='';
            document.querySelector('.newWalletMain .new-pass').style.display='block';
            document.querySelector('.newWalletMain .prompt').style.display='block';
            document.querySelector('.newWalletMain .pass-after').style.display='none';
        },
        navBgShift:function(el){
            el.style.backgroundColor="rgba(33, 37, 153, 0.5)";
            el.style.borderRadius="5rem 5rem 0 0";
            el.style.color="#fff";
        },
        reVisit:function(){
            this.mainTwo=true;
            this.miyaoDetail=false;
            this.queryDetail=false;
        },

        //--------------------------------------------------------------
        //新钱包
        cli:function(){
            if(this.password.length<9){
                alert('密码长度不得少于9');
            }else {
                this.$http.post('', {     //新钱包
                    password: this.password
                }, {
                    emulateJSON: true
                }).then(success, this.errorAlert);
            }

            function success(data){
                // this.aDownload=data.url;
                document.querySelector('.newWalletMain .new-pass').style.display='none';
                document.querySelector('.newWalletMain .prompt').style.display='none';
                document.querySelector('.newWalletMain .pass-after').style.display='block';
            }
        },
        errorAlert:function(data){
            switch(data.status){
                case 200:
                    break;
                case 404:
                    alert('not found');
                    break;
                case 503:
                    alert('服务器不可用');
                    break;
            }
        },
        //交易
        sendClick(ev){
            if(this.sendKey===''){
                alert('请输入地址');
                return;
            }
            var method;
            if(this.key1){
                method="private";
            }else{
                method="json";
            }
            this.$http.post('',{
                method:method,
                sendKey:this.sendKey
            }).then(
                function(data){
                    this.mainTwo=false;
                    this.miyaoDetail=true;
                    this.userAddress='adddadsadasdsad';
                    this.surplus='666'
                },
                this.errorAlert
            )
        },
        //查询
        queryClick:function(ev){
            if(this.queryKey===''){
                alert('请输入地址');
                return;
            }
            var method;
            if(this.key3){
                method="private";
            }else{
                method="json";
            }
            this.$http.post('',{
                method:method,
                queryKey:this.queryKey
            }).then(
                function(data){
                    this.mainTwo=false;
                    this.queryDetail=true;
                    var JsonData=JSON.parse(data.bodyText);
                    this.list=JsonData.message;
                },
                this.errorAlert
            )
        },
        //密钥
        miyaoSend:function(){
            if(this.address==='' && this.sendPrice===''){
                alert('请输入转账金额和转账地址');
                return;
            } else {
                if (this.address === '') {
                    alert('请输入转账地址');
                    return;
                } else if (this.sendPrice === '') {
                    alert('请输入转账金额');
                    return;
                }
            }
            this.$http.post('',{
                address:this.address,
                sendPrice:this.sendprice,
                danwei:this.sendSelect
            }).then(
                function(){
                    alert('转账成功');
                    this.address='';
                    this.sendPrice='';
                },
                this.errorAlert
            )
        }
    },
    watch:{
        key1:function(data){
            if(data===true){
                this.key2=false;
            }else if(data===false){
                this.key2=true;
            }
        },
        key2:function(data){
            if(data===true){
                this.key1=false;
            }else if(data===false){
                this.key1=true;
            }
        },
        key3:function(data){
            if(data===true){
                this.key4=false;
            }else if(data===false){
                this.key4=true;
            }
        },
        key4:function(data){
            if(data===true){
                this.key3=false;
            }else if(data===false){
                this.key3=true;
            }
        }
    },
    mounted(){
        this.promptEnter();
    }
});