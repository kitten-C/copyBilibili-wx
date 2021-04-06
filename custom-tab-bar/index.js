Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/index/index",
      iconPath: "/img/myTabbar/shouye.png",
      selectedIconPath: "/img/myTabbar/shouye1.png",
      text: "首页"
    }, {
      pagePath: "/index/index2",
      iconPath: "/img/myTabbar/liebiao.png",
      selectedIconPath: "/img/myTabbar/liebiao1.png",
      text: "频道"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})