var plugin = requirePlugin("smsvercode");  //引用短信校验码插件

Page({

  data: {
    phonenumber: '',
    ak: ''  //建议从数据库内获取
  },

  bindphonenumber: function (e) {    
    this.data.phonenumber = e.detail.value;
  },

  //获取短信验证码
  getcode: function(e){    
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
  },

  //校验短信校验码
  formSubmit: function(e){
    var that = this;
    var phonenumber = e.detail.value.phonenumber;
    var vercode = e.detail.value.vercode;

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
  }
})