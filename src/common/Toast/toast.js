import Vue from 'vue'
import Element from './index.vue'



const Toast = {}
Toast.install = Vue => {
  const ToastObj = Vue.extend(Element)
  const ToastIns = new ToastObj()

  ToastIns.$mount(document.createElement('div'))
  document.body.appendChild(ToastIns.$el)

  Vue.prototype.$toast = (msg, duration = 3000) => {
    ToastIns.message = msg
    ToastIns.visible = true
    setTimeout(() => {
      ToastIns.visible = false
    }, duration)
  }
}
export default Toast

// let TipConstructor = Vue.extend(Element)
// let tipPool = []

// TipConstructor.prototype.close = function() {
//   this.visible = false
//   returnAnInstance(this)
// }

// let returnAnInstance = instance => {
//   instance && (tipPool.push(instance))
// }

// let getAnInstance = () => {
//   if (tipPool.length) {
//     let instance = tipPool[0]
//     tipPool.splice(0, 1)
//     return instance
//   }
//   return new TipConstructor({
//     el: document.createElement('div')
//   })
// }

// let Tip = (options = {}) => {
//   let duration = options.duration || 2000

//   let instance = getAnInstance()

//   clearTimeout(instance.timer)

//   instance.message = typeof options === 'string' ? options : options.message

//   document.body.appendChild(instance.$el)

//   Vue.nextTick(function () {
//     instance.visible = true
//     instance.timer = setTimeout(() => {
//       instance.close()
//     }, duration)
//   })

//   return instance
// }

// Tip.install = function () {
//   Vue.prototype.$tip = Tip
// }

// export default Tip