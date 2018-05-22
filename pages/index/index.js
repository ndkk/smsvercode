var plugin = requirePlugin("smsvercode")
Page({
  data:{
    ak: ''  //建议从数据库里获取该值
  },

  onLoad: function() {
  },

  myevent: function(e){
    console.log('enter myevent. ', e);
  }
})