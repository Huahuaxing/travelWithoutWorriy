// pages/route/route.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navArr:['鳞次栉比北京城','五彩缤纷天津市','文化璀璨河北省'],
    navIndex:0,
    beijingImages:['http://photogz.photo.store.qq.com/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/05RlWl8gsTOH*Z17MtCBzIcsDybV9ZGkLSUAFlg72R*5*pGOXxh8rQYd05z6g*TyT7LpiV3aPQ81Fdn7Eg0CPg!!/m&bo=XAM9AlwDPQIWADA!&rf=mood_app'],
    tianjinImages:['http://photogz.photo.store.qq.com/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/05RlWl8gsTOH*Z17MtCBzFLNGaYx4cvjLQqvhMvH4ZyYI8JdJJ0d3KUiACKrmlPCq2FB8uI7KTDxjop6n9M8VA!!/m&bo=oAU4BKAFOAQWADA!&rf=mood_app'],
    hebeiImages:['http://photogz.photo.store.qq.com/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/05RlWl8gsTOH*Z17MtCBzDMVsTvx1pNCoC*Zo1.FxdmFpYpu77P1E*8b0ZFM0HUd2l1QuDhjk7TJ7t1CVx2Zzg!!/m&bo=oAU4BKAFOAQWADA!&rf=mood_app']
  },

  navChange(e){
    this.setData({
        navIndex:e.currentTarget.dataset.index
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