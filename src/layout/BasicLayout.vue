<template>
  <div class="layout">
    <div class="layout-header">
      <div class="nav-links">
        <div class="nav-item"  v-for="item in navItems" :key="item.key" @click="onClickLink">
          <span :id="item.key" class="nav-link" :class="[current === item.key ? 'nav-link-active' : '']">
            {{item.name}}
          </span>
        </div>
      </div>
    </div>
    <div class="layout-content">
      <router-view />
    </div>
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
  }
  .layout-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 24px;
    text-align: right;
    color: #333;
    background: #fff;
    font-size: 14px;
    
    .nav-links {
      display: inline-flex;
      font-weight: 500;
    }
    

    .nav-item {
      margin-left: 16px;
      cursor: pointer;
    }

    .nav-link {
      padding-bottom: 6px;
    }
    
    .nav-link-active {
      border-bottom: 2px solid #46bd87;
    }
  }

  .layout-content {
    height: 100%;
    padding-top: 50px;
    background: #f4f4f4;
  }
</style>