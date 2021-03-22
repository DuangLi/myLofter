function waterfall(parent,blocks){
  let theParent=document.getElementById(parent);
  let arrBlock=GetArrofChild(parent,blocks);
  let blockWidth=arrBlock[0].offsetWidth; 
  let num=Math.floor(document.documentElement.clientWidth/blockWidth);
  theParent.style.cssText="width:" +blockWidth*num+"px;margin:0 auto;";
    
  let HeightArr=[];
  for(let i=0;i<arrBlock.length;i++){
    let blockHeight=arrBlock[i].offsetHeight;
    if(i<num){
        HeightArr[i]=blockHeight;
    }
    else{
      let minHeight=Math.min.apply(null,HeightArr);
      let minHeightIndex=GetMinindex(HeightArr,minHeight);
      arrBlock[i].style.position="absolute";
      arrBlock[i].style.top=minH+"px";
      arrBlock[i].style.left=arrBlock[minHeightIndex].offsetLeft+"px";
      HeightArr[minHeightIndex]+=arrBlock[i].offsetHeight;
    }
  } 
}

function GetArrofChild(parent,blocks){
  let childs=document.getElementsByTagName("*");
  let arrs=[];

  for(let i=0;i<childs.length;i++){
    if(childs[i].className==className){
      arrs.push(childs[i]);
    }
  }
  return arrs;
}

function GetMinindex(HeightArr,minHeight){
  for(let i in HeightArr)
  {
    if(HeightArr[i]==minHeight)
    {
      return i;  
    }
  }
}