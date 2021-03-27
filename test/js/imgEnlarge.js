var changebuttons=document.getElementsByClassName("member-article-list")[0].getElementsByClassName("listimg-nochange");
for(var i=0;i<changebuttons.length;i++){
  changebuttons[i].onclick=function(){
    if(this.className == "listimg-nochange"){
      this.className="listimg-change";
      this.getElementsByTagName("img")[0].style.width="400px";
      this.getElementsByTagName("img")[0].style.height="400px";
    }
    else{
      this.className="listimg-nochange";
      this.getElementsByTagName("img")[0].style.width="100px";
      this.getElementsByTagName("img")[0].style.height="100px";//这里有一个问题就是还不知道如何把图片还原成默认的宽高（或许可以用别的变量存一下）
    }
  }
}