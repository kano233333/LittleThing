
document.getElementById('container').style.width = document.documentElement.clientWidth + 'px';

var broadcastParent = document.querySelector('#home .broadcast-img');
var pagerEl = document.querySelector('.pager');
function broadcast(obj){
    var bImg = obj.PEl.getElementsByTagName('img');
    var imgLength = bImg.length;
    var PWidth = obj.PEl.clientWidth;
    var preventI = 1;
    if(obj.method) {
        setPager();
    }
    var pagerDot = obj.pagerEl.getElementsByTagName('p');
    obj.PEl.style.left = -PWidth+'px';

    function move(direct){
        obj.PEl.style.transition = obj.transitionStr;
        preventI+=direct;
        obj.PEl.style.left = -preventI*PWidth + 'px';
        if(preventI === imgLength-1){
            setTimeout(function(){
                obj.PEl.style.transition = '0s';
                obj.PEl.style.left = -PWidth + 'px';
                preventI=1;
            },obj.shiftTime);
        }
        if(preventI === 0 && direct===-1){
            setTimeout(function(){
                obj.PEl.style.transition = '0s';
                obj.PEl.style.left = -PWidth*(imgLength-2) + 'px';
                preventI=bImg.length-2;
            },obj.shiftTime);
        }
    }

    window[obj.xxx]=setInterval(function(){
        move(-1);
        shiftPager();
    },obj.setTime);

    obj.PEl.parentNode.onmouseenter = function(){
        clearInterval(window[obj.xxx]);
        if(obj.method){
            obj.arronLeftEl.style.visibility = 'visible';
            obj.arronLeftEl.style.opacity = '1';
            obj.arronRightEl.style.visibility = 'visible';
            obj.arronRightEl.style.opacity = '1';
        }
    };
    obj.PEl.parentNode.onmouseleave = function(){
        if(obj.method){
            obj.arronLeftEl.style.opacity = '0';
            obj.arronLeftEl.style.visibility = 'hidden';
            obj.arronRightEl.style.opacity = '0';
            obj.arronRightEl.style.visibility = 'hidden';
        }
        window[obj.xxx]=setInterval(function(){
            move(1);
            shiftPager();
        },obj.setTime);
    };

    if(obj.method){
        obj.arronRightEl.onclick = function(){
            move(1);
            shiftPager();
        };
        obj.arronLeftEl.onclick = function(){
            move(-1);
            shiftPager();
        };
    }

    function setPager(){
        for(var i=0;i<imgLength-2;i++){
            var pagerDotX = document.createElement('p');
            if(i===0){
                pagerDotX.className = obj.pagerClassName2;
            }else{
                pagerDotX.className = obj.pagerClassName1;
            }
            obj.pagerEl.appendChild(pagerDotX);
        }
    }

    function shiftPager(){
        for(var i=0;i<imgLength-2;i++){
            pagerDot[i].className = obj.pagerClassName1;
        }
        var k = preventI-1;
        if(preventI === imgLength-1){
            k=0;
        }else if(preventI === 0){
            k=pagerDot.length-1;
        }
        pagerDot[k].className = obj.pagerClassName2;
    }

    (function(){
        for(var i=0;i<pagerDot.length;i++){
            (function(i){
                pagerDot[i].onclick = function(){
                    preventI = i;
                    move(1);
                    shiftPager();
                }
            })(i);
        }
    })();
}

var castObj = {
    PEl:broadcastParent,
    setTime:4000,
    transitionStr:'1s all',
    shiftTime:1000,
    pagerEl:pagerEl,
    pagerClassName1:'pager-dot1',
    pagerClassName2:'pager-dot2',
    xxx:'aaa',
    method:'1',
    arronLeftEl:document.querySelector('.arronLeft'),
    arronRightEl:document.querySelector('.arronRight')
};
broadcast(castObj);