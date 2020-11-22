// pages/category/category.js
Page({
  //catgory页面的数据初始化
  data: {
  },
  //onLoad:页面初次加载
  onLoad(){
    console.log('页面初次加载，onLoad');
  },
    //onShow:页面显示完成
    onShow(){
      console.log('页面显示完成，onShow');
    },
    //onReady:页面初次渲染完成
    onReady(){
      console.log('页面初次渲染完成,onReady');
    },
  //onHied:在当前页面被切换到别的页面，就会触发该事件
  onHide(){
    console.log("在当前页面被切换到别的页面，就会触发该事件,onHide");
  },
  //onUnLoda：在当前页面小程序被退出
  onUnload(){
    console.log('在当前页面被切换到别的页面,onUnload');
  },

  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('监听页面的上拉加载事件，onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('监听用户上拉到底的事件，onReachBottom');
  },
  //onPageScroll:页面滚动事件
  onPageScroll(info){
    console.log("页面滚动事件，onPageScroll",info);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('监听用户点击右上角分享事件，onShareAppMessage');
  },
  onTabItemTap(item){
  console.log(item);

  }
})