// pages/cart/cart.js
import request from '../../network/index';
Page({
  //点击，触发网络请求
  handleBtnClick(){
    console.log("发送网络请求");
    //使用封装的网络请求发送
    request({
      url:'http://152.136.185.210:8000/api/w6/home/multidata',
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });
  },
  //普通的发送网络请求
  //   wx.request({
  //     url:'http://152.136.185.210:8000/api/w6/home/multidata',
  //     method:"get",
  //     success:function(res){
  //       console.log(res);
  //     },
  //     fail:function(err){
  //       console.log(err);
  //     },
  //     complete:function(comp){
  //       console.log(comp);
  //     }
  //   });
  // }

  //显示消息提示框：wx.showToat()
  handleShowToast(){
    wx.showToast({
      title:'成功',
      icon:'success',
      duration:5000,
      mask:true,
      success:function(res){
        console.log(res);
      },
      fail:function(err){
        console.log(err);
      },
      complete:function(comp){
        console.log(comp);
      }
   
    })
  },

  //显示确定和取消按钮
  handleShowModal(){
    wx.showModal({
      title:'加载Ing',
      content:"确认删除？",
      showCancel:true,
      cancelText:'退出',
      cancelColor:"#ff55777",
      confirmText:'确定',
      confirmColor:'#fff83e',
      success:function(res){
        console.log(res);
        if(res.confirm){
          console.log("删除成功");
        }else{
          console.log("取消删除");
        }
      },
      // fail:function(err){
      //   console.log(err);
      // },
    })
  },

  //显示加载框wx.showLoading(),关闭加载库使用：wx.hideLoading()
  handleShowLoading(){
    wx.showLoading({
      title: '加载中',
      mask:'true',
      // success:function(res){
      //   console.log(res);
      // },
      // fail:function(err){
      //   console.log(err);
      // },
    })
    request({
      url:'http://152.136.185.210:8000/api/w6/home/multidata',
    }).then(res=>{
      console.log(res);
      //发送网络请求成功，使用wx.hideLoading()进行关闭加载图标
        wx.hideLoading()
    }).catch(err=>{
      console.log(err);
    });
  },

  //显示操作菜单wxwx.showActionSheet()
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['a','b','c','d'],
      // alertText:true,
      itemColor:"#ff5777",
      success:function(res){
        console.log(res);
        //可以打印出选择了itemList里面的那个选项
        console.log(res.tapIndex)
      },
      fail:function(err){
        console.log(err);
      },
      complete:function(comp){
        console.log(comp);
      }
    })

  },

  //用户点击了右上角的三个点，进行分享操作，默认显示“当前页面未设置分享
  //只要这样写了这个函数，就激活了这个，可以进行分享操作
  onShareAppMessage:function(option){
   return {
     title:"你好啊，哈哈哈哈",
     path:"/pages/home/home",
     imageUrl:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E6%9D%8E%E6%98%93%E5%B3%B0%E5%9B%BE%E7%89%87&hs=2&pn=0&spn=0&di=41290&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=4019553088%2C3729725086&os=2994662823%2C3184736850&simid=18404273%2C739333065&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=star&bdtype=11&oriquery=%E6%9D%8E%E6%98%93%E5%B3%B0%E5%9B%BE%E7%89%87&objurl=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2020%2F1122%2F5594acb2j00qk6fl5000hc000eb00afc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&fromurl=ippr_z2C%24qAzdH3FAzdH3F1y_z%26e3B8mn_z%26e3Bv54AzdH3Fw6ptvsjAzdH3FFS8HOJL9acdmPHEH_z%26e3Bip4s&gsm=1&islist=&querylist="
   }
  },




 

})