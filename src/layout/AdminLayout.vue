<template>
  <a-layout class="layout">
    <a-layout-sider>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <span class="nav-text">文章管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {},
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
    };
  }
});
</script>

<style scoped>
  .layout {
    height: 100vh;
  }
  .layout-content {
    overflow-y: auto;
  }
</style>
