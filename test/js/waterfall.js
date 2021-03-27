window.onload=function(){
  //获取父元素容器的宽度
  var content = document.getElementsByClassName("member_article_list")[0];
  var contentWidth=content.offsetWidth;
  console.log(contentWidth);

  //获取单个子元素的宽度
  var imgs=content.children;
  var imgsWidth=imgs[0].offsetWidth;
  console.log(imgsWidth);

  //第一行可以放置的元素个数
  var nums=Math.floor(contentWidth/imgsWidth);//该函数返回一个小于等于给定数字的最大整数（高斯函数？）
  console.log(nums);

  //记录第一行的高度
  var arrHeight=[];

  for(var i=0;i<imgs.length;i++){
    if(i<nums){//放入第一行元素
      arrHeight.push(imgs[i].offsetHeight);
    }
    else{
      //创建第一个元素的对象
      var obj={
        minH:arrHeight[0],
        minI:0
      }
      for(var j=0;j<arrHeight.length;j++){//寻找最小列高度及索引
        if(arrHeight[j]<obj.minH){
          obj.minH=arrHeight[j];
          obj.minI=j;
        }
      }
      imgs[i].style.position = "absolute";
      imgs[i].style.left = imgs[obj.minI].offsetLeft+"px";
      imgs[i].style.top = obj.minH+"px";
      arrHeight[obj.minI] = arrHeight[obj.minI]+imgs[i].offsetHeight;
    }
  } 
  console.log(arrHeight[0]);
}