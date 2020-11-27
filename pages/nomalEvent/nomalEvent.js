// pages/nomalEvent/nomalEvent.js
Page({
  data: {
  },
  handletouchstart(){
    console.log("点击开始,handletouchstart");
  },
  handletouchmove(){
    console.log("点击开始移动,handletouchmove");
  },
  handletouchend(){
    console.log("点击结束,handletouchend");
  },
  handletap(){
    console.log("只是点击一下,handletap");
  },
  // 对于handlelongpress，handlelongtap都是手指点击超过350s再来开触发事件，但是官房推荐使用handlelongpress、
  //触发了handlelongpress事件不会触发handtap事件
  handlelongpress(){
    console.log("停留再屏幕上的时间超过360s触发该事件,handlelongpress");
  },
  //不推荐使用
  handlelongtap(){
    console.log("停留再屏幕上的时间超过350s触发该事件,handlelongtap");
  },
  handleouttertap(){
    console.log("触发外部的点击事件，handleouttertap");
  },
  handleinnertap(){
    console.log("触发里面的点击事件，handleinnertap");
  },
  eventClick(event){
console.log(event);
const item =event.currentTarget.dataset.item;
console.log("传过来的参数",item);
  },
  onLoad(options){
    console.log(options);
  }
})