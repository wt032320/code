var div = document.getElementsByTagName('div')[0];
var disX,
    disY;
//mousedown事件在鼠标按下时触发
div.onmousedown = function(e){
    disX = e.pageX - parseInt(div.style.left);
    disY = e.pageY - parseInt(div.style.top);
    document.onmousemove = function(e){  //要想快速移动不脱离鼠标则用document.  否则div
        div.style.left = e.pageX - disX + "px";
        div.style.top = e.pageY - disY +"px";
    }   
    document.onmouseup = function(){
        document.onmousemove = null;
  }
}
