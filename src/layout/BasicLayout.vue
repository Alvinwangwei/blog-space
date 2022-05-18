<template>
  <div class="layout">
    <!-- 导航 -->
    <nav class="ui inverted attached segment m-padding-tb-mini">
      <div class="ui container">
        <div class="ui inverted secondary menu">
          <h2 class="ui teal header item">Blog</h2>
          <a href="#" class="item"><i class="home icon"></i>首页</a>
          <a href="#" class="item"><i class="idea icon"></i>分类</a>
          <a href="#" class="item"><i class="tags icon"></i>标签</a>
          <a href="#" class="item"><i class="info icon"></i>关于我</a>
          <div class="right item">
            <div class="ui icon inverted transparent input">
              <input type="text" placeholder="Search" />
              <i class="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- 内容 -->
    <div style="height: 300px">
      <!-- <router-view /> -->
    </div>
    <!-- 底部 -->
    <footer class="ui inverted vertical segment">
      <div class="ui container">
        <div class="ui divided inverted grid">
          <div class="three wide column">
            <img src="../assets/logo.png" alt="" class="ui rounded image" style="width: 100px">
          </div>
          <div class="three wide column"></div>
          <div class="three wide column"></div>
          <div class="seven wide column"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

const getNavItems = [
  {
    name: '首页',
    key: 'home',
    path: '/home/index'
  },
  {
    name: '笔记',
    key: 'note',
    path: '/home/note'
  }
]

export default defineComponent({
  name: 'Layout',
  setup() {
    const route = useRoute();
    const current = ref<string>('home');

    const onClickLink = (e: any) => {
      current.value = e.target.id
    }

    return {
      current,
      navItems: getNavItems,
      onClickLink,
    }
  }
})
</script>

<style lang="scss" scoped>
  .layout {
    height: 100%;
    font-size: 14px;
  }
  .layout-header {
    height: 50px;
    line-height: 50px;
    padding: 0 24px;
  }

  .layout-content {
    height: 100%;
    padding-top: 50px;
    background: #f4f4f4;
  }

  .m-padding-tb-mini {
    padding-top: 0.2em !important;
    padding-bottom: 0.2em !important;
  }
</style>