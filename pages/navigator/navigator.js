// pages/navigator/navigator.js
Page({
  data:{
    title:"哈哈哈哈"
  },
  handleBtnClick(){
    wx.navigateTo({
      url: '/pages/image/image',
    })
  },
  handleBtnClick2(){
    wx.redirectTo({
      url: '/pages/nomalEvent/nomalEvent',
    })
  },
  handleBtnClick3(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  handleBtnClick4(){
    wx.reLaunch({
      url: '/pages/image/image?name="小红"&age="31"',
    })
  },

  //对应这个
  handleImagePush(){

    wx.navigateTo({
      url: '/pages/image/image',
    })
  }
})