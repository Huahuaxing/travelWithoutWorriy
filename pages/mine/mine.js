// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //登录按钮
  Login(){
    wx.navigateTo({
      url: '../login/login',
      success:function(res){
        console.log(res)
      }
    })
  },

  Login2(){
    wx.getUserProfile({
      desc: '授权继续',
      success: res => {
        let user = res.userInfo
        console.log("用户信息", user)
        this.setData({
          nickName: user.nickName,
          touxiang: user.avatarUrl
        })
      },
      fail: res => {
        console.log('授权失败', res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})