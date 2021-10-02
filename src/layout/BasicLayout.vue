<template>
  <div class="layout">
    <div class="layout-header">
      layout-header
    </div>
    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout',
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>