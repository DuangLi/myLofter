console.log("454654654");
var buttons=document.getElementsByClassName("buttonbox")[0].getElementsByTagName("button");
var divs=document.getElementsByClassName("divs")[0].getElementsByClassName("div");
for(var i=0;i<buttons.length;i++){
  buttons[i].index=i;//自定义一个索引属性，后面调用
  buttons[i].onclick=function(){
    for(var j=0;j<buttons.length;j++){
      buttons[j].className="nocolor";//将所有类名改为无颜色样式类名
    }
    //为点击的那个盒子添加类名，使其有背景颜色
    this.className="color";

    for(var i=0;i<divs.length;i++){
      divs[i].style.display="none";//隐藏所有块
    }
    //显示选中的块
    divs[this.index].style.display="inline-block";
    console.log(this.index);
  }
}