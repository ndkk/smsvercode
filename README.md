## smsvercode 短信验证码模块 ##

**可以免费直接使用的“短信实名认证”插件，只有两个接口，轻松实现短信实名认证**

具体调用方法：

###一、添加插件 ###

在插件管理中点击“添加插件”，输入“**短信验证码模块**”, 则可以找到该插件，如下图：

![插件添加](https://mmbiz.qpic.cn/mmbiz_png/Sj1Ws3AzCj31gslrRAvibI6eg0OGyvXKeLHaO1cKjygLyvWvblgK0WvGSF8LAUWLwia0v5exbialr40BYGKwELmKA/640?wx_fmt=png)


###二、小程序中集成插件###

####1、直接使用组件####

使用后的效果如下图：

![手机认证界面](https://mmbiz.qpic.cn/mmbiz_png/Sj1Ws3AzCj31gslrRAvibI6eg0OGyvXKeyWs7bVb0ZP4Yhk88dLhuOTGUiczOFBLIicOJCIp5icibGdkDp8ia1uhicpFQ/640?wx_fmt=png)

调用步骤：

#####1）在app.json文件中进行插件引用#####

	"plugins": {
		"smsvercode": {
		"version": "1.0.1",
		"provider": "wx47025434eb041672"
		}	
	}

#####2）page页放入以下代码#####

js：

`const smsvercode = requirePlugin('smsvercode');`


json：

	{
  		"usingComponents": {
    		"smsvercode": "plugin://smsvercode/smsvercode"
  		},
  		"navigationBarTitleText": "手机认证"
	}

wxml：

`<smsvercode bindformsubmit="myevent" button-text="下一步" />`

则可以直接使用。



####2、调用组件中的api接口####
共有两个接口`getvercode`、`checkvercode`：

#####1）获取验证码接口，使用方法如下（其中app.json中加载组件的方法同直接使用组件，这里不再重复）：#####
 
	var smsvercode= requirePlugin("smsvercode");  //引用短信校验码插件

	smsvercode.getvercode(this.data.phonenumber, function(res){
      if (res.errno == "0"){
        wx.showToast({
          title: '发送成功',
        })
      }
      else{
        wx.showToast({
          title: '发送失败',
        })
      }
    });

#####2）校验验证码接口，使用方法如下：#####

	var smsvercode= requirePlugin("smsvercode");  //引用短信校验码插件

	smsvercode.checkvercode(phonenumber, vercode, function(res){
      if (res.errno == "0"){
        wx.showToast({
          title: '校验成功',
        })
      }
      else{
        wx.showToast({
          title: '校验失败',
        })
      }
    });


其他有什么需求也可以联系我。

注意：发送的短信抬头是以【精发科技】作为抬头的，如果不变更抬头完全免费。
如果需要更新为自己的公司抬头，前100条短信免费。后面的短信按照采购量计价，
有这样需求的公司或个人可以联系我，手机号码17302856632，可以直接加微信。
