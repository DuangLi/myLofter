var modalbuttons = document.getElementsByClassName("publishlink");
var mask = document.getElementsByClassName("mask")[0];
var modal = document.getElementsByClassName("modal")[0];
var closes = document.getElementsByClassName("closebutton")[0];
for(var i=0;i<modalbuttons.length;i++){
    modalbuttons[i].onclick = show;
}
closes.onclick = close;
function show(){
    mask.style.display = "block";
    modal.style.display = "block";
}
function close(){
    mask.style.display = "none";
    modal.style.display = "none";
}