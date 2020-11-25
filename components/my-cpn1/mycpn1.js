// components/my-cpn1/mycpn1.js
Component({
//  在这里定义让page自定义的属性内容:properties
  properties: {
    name:{
      type:String,  //设置类型
      value:'小红'   //设置默认值
    },
    age:null,
  },
  //让page自定义组件的样式:externalClasses
  externalClasses:['title'],
//组件的初始化数据
  data: {

  },
// 组件的方法
  methods: {
    btnClick(){
     //console.log("触发事件");
     //传递给page,通过this.triggerEvent()
     this.triggerEvent("btnClick",{},{});
    },
    editName(){
      console.log("父页面触发该事件");
    }
  },


})
