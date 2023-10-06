// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImages:[
      "http://a1.qpic.cn/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/8v1c6OdZLSE3kzDE6fnRyoLYViu2lQggxBJrKF2WLZLCyThZou0FYSXGl1ED2w.bW2ysF6Zt2ZSu09S4UaZlmKP.yAzjCTMnoNiePoRc11M!/m&ek=1&kp=1&pt=0&bo=QAYQBEAGEAQWADA!&tl=3&vuin=2821910848&tm=1696338000&dis_t=1696341387&dis_k=4face58df2f1367de3b7dc8709b16af8&sce=60-4-3&rf=0-0",
      "http://a1.qpic.cn/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/8v1c6OdZLSE3kzDE6fnRysSI25577nTmA4u0BGdGYO3J5oRMpX5ZBifQDBIJ3brovboh3Q7yEN5cUqOh*kTPXc8aqD1*3Pnd2GR94z59LTE!/m&ek=1&kp=1&pt=0&bo=QAYQBEAGEAQWADA!&tl=3&vuin=2821910848&tm=1696338000&dis_t=1696341387&dis_k=20910b7b2b3933e0bd7120983d964bf4&sce=60-4-3&rf=0-0",
      "http://a1.qpic.cn/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/8v1c6OdZLSE3kzDE6fnRysSI25577nTmA4u0BGdGYO2X8apb2uBvfFFFlbNUuj.PUNNzfHfptH7F*TT4j3.djgcCsXPEdQQLhsXg0wHG3Co!/m&ek=1&kp=1&pt=0&bo=QAYQBEAGEAQWADA!&tl=3&vuin=2821910848&tm=1696338000&dis_t=1696341387&dis_k=52596c2cf99ee6b7263cb28ae423aab6&sce=60-4-3&rf=0-0"
    ],
    threeImages:[
      {url:'/pages/Beijing/Beijing', src:'http://a1.qpic.cn/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/05RlWl8gsTOH*Z17MtCBzD*nb4zQkW5Zp2WucmocuynP0JedKNr9o4142wMHh8fHZjKOD.g28ZowYAuHZzlScw!!/m&ek=1&kp=1&pt=0&bo=ZAGPAGQBjwAWADA!&tl=1&tm=1696428000&dis_t=1696428164&dis_k=f4e9df7ee2d4e8a0735fee31efb2eccc&sce=0-12-12&rf=0-18'},
      {url:'/pages/Tianjin/Tianjin', src:'http://a1.qpic.cn/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/05RlWl8gsTOH*Z17MtCBzFPgNHuQmoPkSsoLwvFBbBm8sDcvuKp7onCe4eikHjr5boQ8.bOVWSUPzMJHaHFWLg!!/m&ek=1&kp=1&pt=0&bo=ZAGRAGQBkQAWADA!&tl=1&tm=1696428000&dis_t=1696428164&dis_k=8d74747376852ff403167f13d944a578&sce=0-12-12&rf=0-18'},
      {url:'/pages/Hebei/Hebei', src:'http://a1.qpic.cn/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/05RlWl8gsTOH*Z17MtCBzDk71qKsRKR67nWskJbUDeWRSm2ysTG67HsMUOKs7xl0nc1l9Jk*jW.BjJF.5TV77A!!/m&ek=1&kp=1&pt=0&bo=ZAGEAGQBhAAWADA!&tl=1&tm=1696428000&dis_t=1696428164&dis_k=541d00aa5ce1a28b0c89ee298e661a9c&sce=0-12-12&rf=0-18'}
    ],
    Add:"http://a1.qpic.cn/psc?/V52GvCUa4YO1ha4bXOQC2A2iBA0uJ3Df/05RlWl8gsTOH*Z17MtCBzA6xCr0O9rDwXakkLHKtc5OF9Da9iEkVLfYN6LMx3.nBYTmEyDw1Ew9rA1kE1X3fuw!!/c&ek=1&kp=1&pt=0&bo=3wJpAN8CaQAWADA!&tl=1&tm=1696510800&dis_t=1696511754&dis_k=6cf8820b9c491338fc3c4030e75f27b7&sce=0-12-12&rf=0-18"
  },

  clickAdd: function(){
    wx.switchTab({
      url: '../customization/customization',
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