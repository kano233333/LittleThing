function init(){
    document.getElementById('container').style.width=window.innerWidth/100+'rem';
}
init();

function headGameImg(){
    $('#head-game').mouseenter(function(){
        $('.head-game-show').show(500);
    })
    $('#head-game').mouseleave(function(){
        $('.head-game-show').hide();
    })
    $('.head-game-show').mouseenter(function(){
        $('.head-game-show').show();
    })
    $('.head-game-show').mouseleave(function(){
        $('.head-game-show').hide(500);
    })
    let img=[
        'https://i0.hdslb.com/bfs/game/9943ddcc7be10195255dfc8df6194351b423e32b.png',
        'https://i0.hdslb.com/bfs/game/49e04cff471f8ff0685b2a97eb2d2d423273a46e.png',
        'https://i0.hdslb.com/bfs/game/3baf9691d759e6689bc19aceb1a9e394e2b82ed2.png',
        'https://i0.hdslb.com/bfs/game/bba2a1df234f41d59cab14181e63a65815667e26.png',
        'https://i0.hdslb.com/bfs/game/795b671689d64411ce1fba26395cc7245c926591.png',
        'https://i0.hdslb.com/bfs/game/8ecba594e8f72e61187a38dc497c438a91f755d8.png',
        'https://i0.hdslb.com/bfs/game/473c5dd7249a786e4a60293709fae8d2c362a01c.png'
    ];
    let imgEl=document.querySelectorAll('.head-game-show2-lower a');
    for(let i=0;i<imgEl.length;i++){
        imgEl[i].onmouseenter=function(){
            document.querySelector('.head-game-show2-img').style.display='block';
            document.querySelector('.head-game-show2-img img').src=img[i];
        };
        imgEl[i].onmouseleave=function(){
            document.querySelector('.head-game-show2-img').style.display='none';
            document.querySelector('.head-game-show2-img img').src='';
        }
    }
}
headGameImg();

function headLiveBMLApp(){
    headNormalShow('#head-live','.head-live-show');

    $('.head-live-peason-img').mouseenter(function(){
        $(this).children('input').show(300);
    })
    $('.head-live-peason-img').mouseleave(function(){
        $(this).children('input').hide(300);
    })

    headNormalShow('#head-live','.head-live-show');
    headNormalShow('#head-BML','.head-bml-show');
    headNormalShow('#head-app','.head-app-show');
    headNormalShow('#head-vip','.head-vip-show');
    headNormalShow('#head-msg','.head-msg-show');
    headNormalShow('#head-act','.head-act-show');
    headNormalShow('#head-submission','.head-submission1');
}
headLiveBMLApp();

function headNormalShow(x,y){
    $(x).mouseenter(function(){
        $(y).show(500);
    })
    $(x).mouseleave(function(){
        $(y).hide();
    })
    $(y).mouseenter(function(){
        $(y).show();
    })
    $(y).mouseleave(function(){
        $(y).hide(500);
    })
}

function headAct(){
    $('.head-act-show1 span').click(function(){
        $('.head-act-show1 span').attr('class','');
        $(this).attr('class','head-act-show1-xuan');
    })

    // 投稿
    $('.head-submission-detail').mouseenter(function(){
        $(this).children('span').css({
            "animation":'0.5s upper forwards'
        },1000)
    }).mouseleave(function(){
        $(this).children('span').css({
            "animation":"0.5s upper-back forwards"
        })
    })
}
headAct();


function headNavArrow(){
    $('.head-nav-er').mouseenter(function(){
        $(this).children('.head-nav2').show(200);
    })
    $('.head-nav-er').mouseleave(function(){
        $(this).children('.head-nav2').hide(200);
    })


    $('.head-nav2 li').mouseenter(function(){
        $(this).children('a').css({
            "animation":"0.3s arrow-trans forwards"
        })
        $(this).children('a').children('.head-nav2-arrow').css({
            "animation":"0.3s arrow-show forwards"
        })
        // console.log($(this).children('a').children('.head-nav2-arrow'));
    }).mouseleave(function(){
        $(this).children('a').css({
            "animation":"0.3s arrow-back forwards"
        })
        $(this).children('a').children('.head-nav2-arrow').css({
            "animation":"",
            "visibility":'hidden'
        })
    })
}
headNavArrow();








//-------------------------------------------------------------------------------
function broadcastImg(obj){
    let newI=0;
    let preClassName=obj.el[0].className;
    createBo();
    let boEl=document.getElementsByClassName(obj.boClassName);
    obj.el[0].style.display='block';

    window[obj.xxx]=setInterval(imgAnimate,3000);

    obj.el[0].parentNode.parentNode.onmouseleave=function(){
        window[obj.xxx]=setInterval(imgAnimate,3000);
    };
    obj.el[0].parentNode.parentNode.onmouseenter=function(){
        clearInterval(window[obj.xxx]);
    };

    clickBo();
    function imgAnimate(){
        let i=newI;
        obj.el[newI].className=preClassName+" "+obj.animate[0];
        obj.el[newI].addEventListener('animationend',function imgAnimateDetail(){
            obj.el[newI].style.display='none';
            newI++;
            if(newI===obj.el.length){
                newI=0;
            }
            obj.el[newI].style.display='block';
            obj.el[newI].className=preClassName+" "+obj.animate[1];
            shiftBo(i);
            obj.el[i].removeEventListener('animationend',imgAnimateDetail,false);
        });
    }

    function createBo(){
        for(let i=0;i<obj.el.length && i<obj.boMax ;i++) {
            obj.boParentEl.innerHTML =obj.boParentEl.innerHTML + obj.boElHtml;
            if(obj.method===2) {
                document.getElementsByClassName(obj.boClassName)[i].value = i + 1;
            }
        }
        document.getElementsByClassName(obj.boClassName)[0].className=obj.boChangeClassName;
    }

    function shiftBo(i){
        document.getElementsByClassName(obj.boChangeClassName)[0].className=obj.boClassName;
        boEl[newI].className=obj.boChangeClassName;
    }

    function clickBo(){
        let child=obj.boParentEl.children;
        for(let i=0;i<child.length;i++){
            child[i].onclick=function(){
                obj.el[newI].className=preClassName+" "+obj.animate[0];
                obj.el[newI].addEventListener('animationend',remove(i));
            };
        }
    }
    function remove(i){
        let k=newI;
        obj.el[newI].style.display='none';
        if(i===obj.el.length){
            i=0;
        }else if(i===-1){
            i=obj.el.length-1;
        }
        newI=i;
        obj.el[newI].style.display='block';
        obj.el[newI].className=preClassName+" "+obj.animate[1];
        shiftBo(i);
        obj.el[k].removeEventListener('animationend',remove,false);
    }


}

let broad={
    el:document.querySelectorAll('.main1-left img'),
    animate:["animated fadeOutLeft faster","animated fadeInRight faster"],
    boParentEl:document.getElementsByClassName('main1-left-pager')[0],
    boElHtml:"<div class='pager'></div>",
    boClassName:'pager',
    boMax:5,
    method:1,
    boChangeClassName:'pager2',
    xxx:'xxx',
};
broadcastImg(broad);


function mainNormal(){
    let kanEl=document.getElementsByClassName('main1-meng-kan');
    function kanObj(){
        this.kan=true;
        let _this=this;
        this.kanClick=function(data){
            if(_this.kan){
                data.target.style.backgroundImage='url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABiklEQVQ4jbXVzyvDcRzH8efns1+JIRtbOSiKrMRBrZZC5IzcHJYTJyc1J464ubuY5MQ/oLSTNSHfIg5KyEmbzY/5sa++c/hOCtv47rvX8f2pR+/3u0+fjwAgfNoFLAH9gA1jUYEIECLoU0QOjQIVBsHveQECEr1Ts1By1pJEH9/s9EuM77RQbLIMKACG4QaHhYNBL7EBj3lwtU2yFXDT6rRil8Ic2C4F634XnbU24m8aY9F46bAUsNJdR1+9g6f3LKPROBfp99LhxY5aRhorULUs43sJlFQmfxO/FWMDHpQhL+3VXzdxps3JVEsVAJOHSSK3rwWbsP5WtAhorrSy09vAxH6CeoeFOV8NALPHKTZvnovMBoLwafZ7sc4uWfe76HE70HKnUsDy+SNzJ/dFUciziruMxvBunNXLNFLo6Mb1M/N/RCHPKgAyWpbpoyQHdxmaKi0snD3wYzQj8GfWrtL/4L5S1rdCLYOrSvTvxOxEJBBC/07MygsQkgR9ChAAtiltLWrOCBD0KR9smmovo1v+1QAAAABJRU5ErkJggg==")'
            }else{
                data.target.style.backgroundImage='url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABT0lEQVQ4je3VMYrCQBTG8b/DWASLNKJgJ1hY2sloZeF2gkeYW+wZvIVXsLBJY5UdtLJLk17EIghCwChukWRxFzSaaLdfMwm8/EgemTclgOl02gEmwAAoky8RsAA+tdbrUoJ+AVZO8G9CoCeJ39Sq1+sopbBtO5e23+8xxrDdbi1gIog/vxAKYNs2Sqn0diBIenoP9X2fIAgyccv66WZZZBXvdjtc18UYkwlfJxM+n8+/1pfBefMPPw4LEZcEQcBqteJ0Or0GrlartFotLpcLnucxm83YbDbFYSEE/X6f4XBIpVLhcDjgOA6u63I8HvPDaRqNBuPxmHa7DcS7cT6f36yXj8IAUkq63S7NZpPlcomUtx9/Ck5Tq9UYjUZ3a976u0UQz9OiCcMwvYwk8XHyYYxBKXU9+p5Grybg4m1Hk9Bar4Ee4JC0JWeixOhprdffE/1yRW/TLMYAAAAASUVORK5CYII=")';
            }
            _this.kan=!_this.kan;
        }
    }
    let arr=[];
    for(let i=0;i<kanEl.length;i++){
        arr[i]=new kanObj();
        kanEl[i].onclick=arr[i].kanClick;
        console.log(arr[i]);
    }
}
mainNormal();
