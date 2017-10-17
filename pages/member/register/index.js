var e = getApp(),
  t = e.requirejs("core");
Page({
  data: {},
  onLoad: function (e) { 
    this.setData(e)
  },
  onShow: function () {
    this.getData()
  },        
  getData: function () {
    var e = this;
    t.get("commission/register", {}, function (t) {
        t.show = true,
        wx.setNavigationBarTitle({
          title: "商家入驻"
        }),
        e.setData(t)
    })
  },
  inputChange: function (e) {
    "goods" == e.target.id ? this.setData({
      "member.goods": e.detail.value
    }) 
    : "project" == e.target.id ? this.setData({
      "member.project": e.detail.value
    })
    : "desc" == e.target.id && this.setData({
      "member.desc": e.detail.value
    });
    "say" == e.target.id && this.setData({
      "member.say": e.detail.value
    });
    "phone" == e.target.id && this.setData({
      "member.phone": e.detail.value
    });
    "account" == e.target.id && this.setData({
      "member.account": e.detail.value
    });
    "pwd" == e.target.id && this.setData({
      "member.pwd": e.detail.value
    });
  },
  submit: function (e) {
   // console.log(this.data.member);
    if (!this.data.member.goods)
      return void t.alert("请填写,商户名称!");
    if (!this.data.member.project)
      return void t.alert("请填写,主营项目 !");
    if (!this.data.member.desc)
      return void t.alert("请填写,简单介绍!");     
    if (!this.data.member.say)
      return void t.alert("请填写,联系人!");   
    if (!this.data.member.phone)
      return void t.alert("请填写,手机号!");   
   if (!this.data.member.account)
      return void t.alert("请填写,账户!");  
    if (!this.data.member.pwd)  
      return void t.alert("请填写,密码!");        
    var i = {
      merchname: this.data.member.goods,
      salecate: this.data.member.project,
      desc: this.data.member.desc,
      realname: this.data.member.say,
      mobile: this.data.member.phone,
      uname: this.data.member.account,
      upass: this.data.member.pwd,
        };
    t.post("commission/merchregister", i, function (e) {
    if (1 == e.status){
      t.alert("入驻成功");
    }else{
    /*
       return void wx.redirectTo({
          url: 1 == e.check ? "/pages/commission/index" : "/pages/commission/register/index"
        });
        */
      t.alert(e.result.message);
    }

    })
  }
})