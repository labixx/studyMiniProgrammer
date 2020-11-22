1、注册Page就是指注册页面，执行每个页面的page.json文件
2、在执行Page({})时可以做什么呢
1.1、页面的数据初始化
1.2、执行页面的生命周期函数，
1.3、当前页面的一些点击事件监听
示例：
Page({
  页面数据初始化
  data:{}
 页面的生命周期函数
  onLoad(){}   页面初次加载，再这里可以发送当前页面的网络请求
  onShow(){}   页面显示完成
  onReady(){} 页面初次渲染完成
  注意：onReady和onShow：当页面第一次加载出现，显示页面的时候会先执行onShow,初次渲染还会执行onReady，
  而当页面进行切换，当前页面再次显示执行的生命周期是onShow，不会再执行onReady；
  onHied(){} 在当前页面被切换到别的页面,或者在当前页面小程序被退出
  onUnload(){} 在当前页面被切换到别的页面，就会触发该事件
  onPageScroll(info) 当前页面滚动触发该事件
 onPullDownRefresh(){} 监听页面的下拉事件
 onReachBottom(){} 监听页面的上拉触底事件
 onShareAppMessage(){} 监听用户点击右上角的那个分享按钮

})