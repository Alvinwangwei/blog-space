<template>
  <div class="layout">
    <div class="layout-header" :class="[transparentTheme ? 'transparent-theme' : '']">
      <div class="home-link"></div>
      <div class="nav-links">
        <div class="nav-item"  v-for="item in navItems" :key="item.key" @click="onClickLink">
          <div :id="item.key" class="nav-link" :class="[current === item.key ? 'nav-link-active' : '']">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="layout-content">
      <router-view />
    </div>
    <div class="layout-bottom">
      ©2020 - 2021 Ww 
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, ref, watch } from 'vue';
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
    const transparentTheme = ref<boolean>(false)

    const onClickLink = (e: any) => {
      current.value = e.target.id
    }

    watch(
      () => route.name,
      (value) => {
        transparentTheme.value = value === 'Home'
      }
    );

    return {
      current,
      navItems: getNavItems,
      onClickLink,
      transparentTheme,
    }
  }
})
</script>

<style lang="scss" scoped>
  .layout {
    height: 100vh;
  }
  .layout-header {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    color: #333;
    background: #fff;

    &.transparent-theme {
      background: transparent;
      color: #fff;
    }
    
    .nav-links {
      width: fit-content;
      font-size: 14px;
    }

    .nav-item {
      display: inline-block;
      margin-left: 1.5rem;
      line-height: 2rem;
    }

    .nav-link {
      cursor: pointer;
      font-weight: 500;
      &:hover {
        border-bottom: 2px solid #46bd87;
      }
    }

    .nav-link-active {
      border-bottom: 2px solid #46bd87;
    }
  }
  .layout-content {
    min-height: calc(100vh - 150px);
    background: #f4f4f4;
  }
  .layout-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    background: #171d20;
    color: #fff;
  }  
</style>