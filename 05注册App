1、小程序运行的过程：
--- 微信客户端下载小程序包--》
--- 运行app.json文件（找到第一个显示的文件，以及一些配置）--》
 ---注册app，创建App实例对象，也就是运行app.js文件，执行App函数，而在App({})里面包括了很多生命周期函数,
 ---执行自定义page
 ---执行page页面的json文件，然后通过渲染层执行page.wxml，以及逻辑层执行page.js文件，通过这两个双线城的执行，得到一个js对象，最终为一个dom树
1.1、App({})函数里面的生命周期函数介绍：
onLaunch(options){}:  这个函数在小程序初始化的时候会被运行，可以在这里获取一些用户信息或者发送网络请求
onShow(options){}: 这个函数会在小程序显示的时候被运行，
onHide(){}:这个函数会在小程序退出的时候，就是不显示的时候被运行
注意：下程序在后台会被保存2个小时，当退出之后再次进来再2个小时之内会直接运行onShow()生命周期，过了2个小时之后运行小程序才会再次执行onLaunch()
onError(msg){}:这个函数会在小程序运行出错的时候执行
1.2、在app.js文件中的这个App()函数是全局的，就是在这里面创建的数据或者方法，别的页面都是可以获取的，通过该getApp()可以获取
所有的page都是这个App的实例对象，所以一些共享的数据是可以放在app.js文件中的这个App
const appInstance=getApp();
1.3在app.js文件里面可以做什么？
1.3.1、根据生命周期onLaunch(options){}/onShow(options){},可以获取用户进入该小程序中的场景，根据options.scene
1.3.2、获取用户信息的3种方式：
1.3.2.1、在onLaunch(options){}/onShow(options){}中获取用户信息，通过wx.getUserInfo()可以获取
1.3.2.2、通过点击事件，在按钮组件中设置属性,例如：
<button open-type="getUserInfo"  bindgetuserinfo="handleGetUserInfo"></button>
那再bindgetuserinfo事件中就可以获取到用户信息，这个可以保存用户信息，再经过用户授权后获取用户信息
1.3.2.3、通过<open-data></open-data>组件可以直接展示用户信息
<open-data type=''getNickName></open-data>  就会显示用户的昵称信息
1.3.3 定义全局变量，每个页面都是App的实例对象，每个页面都可以获取App里面定义的数据以及方法，通过该方法实现：
const appInstance=getApp();
console.log(appInstance);  这个appInstance里面就有全局的数据以及方法

