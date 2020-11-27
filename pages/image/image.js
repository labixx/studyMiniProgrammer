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
  },
  //监听返回按钮
  handleBtnClick(){
    console.log("触发返回按钮");
    wx.navigateBack({
     
    })
  },
  //监听跳转的页面，获取页面传过来的数据
  //这个options就传过来了页面的数据
  onLoad(options){
 console.log(options);
  },
//返回时，修改上一个界面的数据，
onUnload(){
 const pages= getCurrentPages();
 console.log(pages);
 const firstPage=pages[pages.length-2];
 console.log(firstPage);
 firstPage.setData({
title:"wuwuwuwuwu"
 })
}, 

  handleHomeBack() {
    console.log("back")
   wx.navigateBack({
     delta: 0,
   })
  }

})