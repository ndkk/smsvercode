## 短信验证码模块——一个方便使用的手机实名认证微信小程序插件 ##

## 通告：本插件免费功能已取消。##
## 注意：调用时“调试基础库”要使用最新的版本
https://img-blog.csdnimg.cn/20200529162335261.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTIzMjkyOTQ=,size_16,color_FFFFFF,t_70 ##

### 一、添加插件 ###

在插件管理中点击“添加插件”，输入“**短信验证码模块**”, 则可以找到该插件，如下图：

![插件添加](https://mmbiz.qpic.cn/mmbiz_png/Sj1Ws3AzCj31gslrRAvibI6eg0OGyvXKeLHaO1cKjygLyvWvblgK0WvGSF8LAUWLwia0v5exbialr40BYGKwELmKA/640?wx_fmt=png)


### 二、小程序中集成插件 ###

#### 1、直接使用组件(只是快速集成，实现效果必须用“2、调用组件中的api接口”) ####

使用后的效果如下图：

![手机认证界面](https://mmbiz.qpic.cn/mmbiz_png/Sj1Ws3AzCj1bZbTjSdUJt8lnb5iamQBibYVcicHaOKQRqvcZqnG9oUAS4XToY7euOL6PA0JsHdWnpXAyK2KVWOh6Q/640?wx_fmt=png)

调用步骤：

##### 1）在app.json文件中进行插件引用 #####

	"plugins": {
		"smsvercode": {
		"version": "1.0.2",
		"provider": "wx47025434eb041672"
		}	
	}

##### 2）page页放入以下代码 #####

json：

	{
  		"usingComponents": {
    		"smsvercode": "plugin://smsvercode/smsvercode"
  		}
	}

wxml：

`<smsvercode />`

则可以直接使用。



#### 2、调用组件中的api接口 ####
共有两个接口`getvercodevip`、`checkvercode`：

`getvercodevip` 主要功能是获取短信验证码，有两个参数ak, phonenumber，返回errno为0表示成功，其他表示失败

`checkvercode` 主要功能是校验验证码，有两个参数phonenumber和vercode，返回errno为0表示校验成功，其他表示失败

具体使用实例如下：

##### 1）获取验证码接口，使用方法如下（其中app.json中加载组件的方法同直接使用组件，这里不再重复）： #####
 
	var smsvercode= requirePlugin("smsvercode");  //引用短信校验码插件

	smsvercode.getvercodevip(this.data.ak, this.data.phonenumber, function(res){ 
    });

##### 2）校验验证码接口，使用方法如下： #####

	var smsvercode= requirePlugin("smsvercode");  //引用短信校验码插件

	smsvercode.checkvercode(phonenumber, vercode, function(res){
    });

以上就是api调用功能，可以灵活搭配在自己的系统中。


### 三、组件属性 ###

属性：

	| 字段        | 类型    |  含义  |
	| --------   | -----:   | :----: |
	| buttonText | String   |   替代button文本 |
	| ak         | String   |   商业用户使用，免费用户填写为空    |	

按钮点击输出：

	| 字段        | 包含内容    |  含义  |
	| --------   | -----:      | :----: |
	| e.detail   | 组件内部的触发事件   |  将组件内的触发事件返回给调用者  |	

调用方法：

	<smsvercode bindformsubmit="myevent" ak="{{ak}}" button-text="下一步" />

### 四、API详解 ###

1、getvercodevip：

入参：

	| 字段        | 类型    |  含义  |
	| --------    | -----:   | :----: |	
	| ak          | String   |   商业用户使用，免费用户填写为空    |	
	| phonenumber | String   |   手机号码 |

出参：
	
	| 字段        | 类型      |  含义  |
	| --------    | -----:   | :----: |
	| errno       | String   |  0：成功 1：DB错误 4：ak值无效 8：频繁发送 10：电话号码无效|

调用方法：

	plugin.getvercodevip(this.data.ak, this.data.phonenumber, function(res){
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

2、checkvercode：

入参：

	| 字段        | 类型    |  含义  |
	| --------   | -----:   | :----: |		
	| phonenumber | String   |   手机号码 |
	| vercode     | String   |   验证码    |	

出参：
	
	| 字段        | 类型      |  含义  |
	| --------    | -----:   | :----: |
	| errno       | String   |  0：成功 3：验证码不正确|

调用方法：

	plugin.checkvercode(phonenumber, vercode, function(res){
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


### 五、特殊流程：定制公司抬头 ###

定制公司抬头需要付费并在调用接口时需填写AK值，具体费用如下：

	| 短信条数   | 费用    |  每条价格  |
	| --------  | -----:  | :----: 	|
	| 500条 		| 40元    |  0.08元/条 |
	| 2000条 	| 120元   |  0.06元/条 |  hot!
	| 5000条 	| 275元   |  0.055元/条 |
	| 10000条 	| 500元   |  0.05元/条 |

第一次注册赠送20条短信。

具体查看，可以在小程序中搜索“**短信定时提醒**”，

或者扫描下面的二维码进入“短信定时提醒”：

![短信定时提醒](https://mmbiz.qlogo.cn/mmbiz_png/Sj1Ws3AzCj244vLE4zrLjN3icCJiajPjPt5aGA9bVTsw8PEABhIOss5tgWm1QbFGk9TFqsOfx7VzCEtwc0eQzibsw/0?wx_fmt=png)

进入后按照“**我的**”>"**发现**">"**短信验证码模块**"访问，可以查看到类似下面的界面：


![](https://mmbiz.qlogo.cn/mmbiz_png/Sj1Ws3AzCj244vLE4zrLjN3icCJiajPjPt9sbkEB2TceQbTVibeWu4iagyKGtEfmPkZYEcE5Kd2mNWIHqqzv4tyCibg/0?wx_fmt=png)

其中：

第一行，表示您当前拥有的短信数。

第二行，表示可以充值的类型。

第三行，表示定制的公司抬头，这里可以输入公司抬头，提交审核，我们会尽快进行审核

第四行，AK值，需放到开发接口getvercodevip中进行调用

**当第三行的公司抬头审核通过后，业务将会开通。**

**注意：AK值一旦设定，不要轻易更换，如果更换会造成短信验证码无法触发。**
**另外ak值也不要泄露，泄露可能造成被他人使用该接口**

说明：

定制公司抬头有这样需求的公司或个人可以联系我，直接加QQ号 1438704083。

**有了这个功能可以快速帮助您实现手机实名认证功能，避免后台开发功能的重复投入。**


如果需要直接通过web调用API接口的，可以直接联系1438704083@qq.com


