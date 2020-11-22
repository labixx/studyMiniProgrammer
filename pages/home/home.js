// pages/home/home.js
const appInstance=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'小红',
    student:[
      {name:'小李',age:30,gradle:'2班'},
      {name:'小易',age:3,gradle:'3班'},
       {name:'小峰',age:'33',gradle:'4班'}],
       counter:1,
  },
  handleAddClick(){
    //1、这种直接引用修改data里面的数据是无效的，再页面引用的数据不会进行更新，
   // console.log('触发点击事件');
  //  this.data.counter++;
  //  console.log(this.data.counter);
  
     //2、修改data中对象或数组的属性值需要使用：this.setData()
     this.setData({
      //  左侧的属性名为匹配需要修改data里面的数据名，
      //再方法中使用data里面的方法为：this.data.数据名
       counter:this.data.counter+1,
     });
     console.log(this.data.counter);
     //获取app.js文件中的数据
     const appInstance=getApp();
     console.log(appInstance.global);
  },

  //点击获取用户信息
  handleUserInfo(event){
    console.log("用户授权");
    console.log(event);
  },




})