// pages/image/image.js
Page({
  data: {
    imgList:[],
  },
  //监听图片加载完成事件
  handleImageLoad(){
    console.log("图片加载中");
  },
  //用户选择图片
  selectImage(){
    console.log("进入选择图片");
    wx.chooseImage({
      success:(res)=>{
        console.log(this);
        this.setData({
          imgList:res.tempFilePaths,
        })
     
      },
      fail(err){
        console.log(err);
      },
      complete(res){
        console.log(res);
      }
    })
  }
})