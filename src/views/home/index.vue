<template>
  <div id="home">
    <!-- home -->
  </div>
</template>
<script>
import { findItemInArray, myInstance, isArray } from '../../utils/algorithm'

export default {
  components: {
  },
  created() {
    class myPromise {
      constructor(fn) {
        this.state = 'PENDING'
        this.doneList = []
        this.failList = []
        fn(this.resolve.bind(this), this.reject.bind(this))
      }
      done(handle) {
        if(typeof handle === 'function') {
          this.doneList.push(handle)
        } else {
          throw new Error('缺少回调函数')
        }
        return this
      }
      fail(handle) {
        if(typeof handle === 'function') {
          this.failList.push(handle)
        } else {
          throw new Error('缺少回调函数')
        }
        return this
      }
      then(success, fail) {
        this.done(success || function(){}).fail(fail || function(){})
        return this
      }
      always(handle) {
        this.done(handle || function(){}).fail(handle || function(){})
        return this
      }
      resolve() {
        this.state = 'RESOLVE'
        let args = Array.prototype.slice.call(arguments)
        setTimeout(function() {
          this.doneList.forEach((item, key, arr) => {
            item.apply(null, args)
            arr.shift()
          })
        }.bind(this), 200)
      }
      reject() {
        this.state = 'REJECT'
        let args = Array.prototype.slice.call(arguments)
        setTimeout(function(){
          this.failList.forEach((item, key, arr) => {
            item.apply(null, args)
            arr.shift()
          }) 
        }.bind(this), 200)
      }
    }
    new myPromise((resolve, reject) => {
      resolve({a: 1})
      // reject('err o')
    }).done(res => {
      // console.log(res)
    }).fail(err => {
      // console.log(err)
    })
  }
}
</script>
<style scoped>

</style>