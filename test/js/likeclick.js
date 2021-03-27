var likebuttons=document.getElementsByClassName("likebutton");
var likeimgs=document.getElementsByClassName("likeimg");
console.log(likeimgs.length);
for(var i=0;i<likebuttons.length;i++){
  likebuttons[i].index=i;
  likebuttons[i].onclick=function(){
    if(likeimgs[this.index].id == "nochange"){
      likeimgs[this.index].src = "icons/likeclick.png";
      likeimgs[this.index].id = "change";
    }
    else{
      likeimgs[this.index].src = "icons/like.png";
      likeimgs[this.index].id = "nochange";
    }
  }
}