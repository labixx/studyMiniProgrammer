import request from './network/index';
App({
  //
  globalDate:{
    token:'',
  },
  //onLaunch(options){}:小程序初始化执行
  onLaunch(options){
//小程序登录:1、使用wx.login()获取code
wx.login({
  success:(res)=>{
    console.log("-------------");
    console.log(res)
    const code=res.code;
    wx.request({
      url:'http:123.207.32.32:3000/login',
      method:"post",
      data:{
        code
      },success:(res=>{
        console.log();
      })
    })   

    console.log("---------------");
  }
});












    console.log("小程序进行初始化运行onLaunch",options);
    //使用wx.request({}),可以在该生命周期发送网络请求
    // wx.request({
    //   url: 'url',
    // })
    //获取用户信息
    wx.getUserInfo({
      // lang: lang,
      // withCredentials: true,
      // success:function(){
      //   //注意：再这里直接以function(){}的方式来写函数，这里的this是underfined
      //   //这里要写箭头函数，逐级找到Page的this
      //   console.log(this);//underfined
      // },
      success: (result) => {
        console.log('获取用户信息成功',result);
      },
      fail: (res) => {
        console.log('获取用户信息失败',res)
      },
      complete: (res) => {
        console.log('完成获取用户信息',res);
      },
    })
  },
//onShow(options){}:小程序界面显示执行
onShow(options){
  console.log('小程序界面显示执行onShow',options);
},
//小程序退出或隐藏的时候执行
onHide(){
  console.log("小程序退出或隐藏的时候执行，onHide");
},
//小程序运行出错执行
onError(msg){
  console.log("小程序运行出错",msg)
},
//再app.js文件中也可以配置一些全局的数据,每个page都可以获得该数据
//可以通过 getApp 方法获取到全局唯一的 App 实例，获取App上的数据或调用开发者注册在 App 上的函数。
global:'china'    //示例的全局数据
})