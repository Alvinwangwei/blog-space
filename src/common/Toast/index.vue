<template>
  <transition name="fade">
    <div class="ToastBox" v-if="visible">
      <div class="text">aaaa {{message}}</div>
    </div>  
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
  }
}
</script>

<style lang="postcss" scoped>
.ToastBox {
  position: fixed;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  max-width: 80%;
  padding: 8px 20px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
.text{
  font-size: 14px;
  display: block;
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity  1s linear;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>