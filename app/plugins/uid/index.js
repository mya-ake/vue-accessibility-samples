let uid = 0

const install = (Vue) => {
  Vue.mixin({
    beforeCreate () {
      this.uid = uid
      uid++
    },
  })
}

export default {
  install,
}
