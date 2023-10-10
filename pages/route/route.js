// pages/route/route.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navArr:['青春周末','短途之旅','长途旅行'],
    navIndex:0,
    youthWeekend:[{name:'定州', src:'http://photogz.photo.store.qq.com/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/05RlWl8gsTOH*Z17MtCBzP1*ssmdwRNkIz4z2VJwZgm2SQIIR6RyzPTLqQwjDkcjRMS6hHaNXVROeXZqDKDfNA!!/m&bo=lAFOAZQBTgEWADA!&rf=mood_app'}],
    shortTrip:[],
    longJourney:[]
  },

  navChange(e){
    this.setData({
        navIndex:e.currentTarget.dataset.index
    })
  },

  clickDetails: function(){
    wx.navigateTo({
      url: '/pages/details/details?detailsId = Dingzhou',
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