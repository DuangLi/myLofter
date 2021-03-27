var commentbuttons=document.getElementsByClassName("commentbutton");
var comments=document.getElementsByClassName("member-list-comment");
for(var i=0;i<commentbuttons.length;i++){
  commentbuttons[i].index=i;
  commentbuttons[i].onclick=function(){
    if(comments[this.index].id == "hide"){
      comments[this.index].style.display="block";
      comments[this.index].id = "alyout";
    }
    else{
      comments[this.index].style.display="none";
      comments[this.index].id = "hide";
    }
  }
}