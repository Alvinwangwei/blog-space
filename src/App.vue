<template>
  <div id="app">
    <my-head></my-head>
    <section class="main-contain">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import myHead from 'components/header/index'
export default {
  name: 'app',
  components: {
    myHead
  }
}
</script>

<style>
</style>
