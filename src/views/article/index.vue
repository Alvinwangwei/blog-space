<template>
  <div class="article">
    <div class="content">
      <div class="article-info">
        <div class="article-title">
          <div>组件库源码中这些写法你掌握了吗？</div> 
          <div>
            <span>2020/07/14 10:02:59</span>
            <a-icon type="bulb" />
          </div>
        </div>
      </div>

      <div class="article-catalogue">
          catalogue
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Article',
  components: {
  },
  setup() {
    onMounted(() => {
    })
    return {
    }
  }
});
</script>

<style lang="scss" scoped>
  .article {
    padding-top: 58px;
    height: calc(100vh - 150px);
    background: #fff;

    .content {
      width: 85%;
      margin: 0 auto;
      display: flex;
    }

    .article-info {
      flex: 1;
      padding: 32px 40px;
    }

    .article-catalogue {
      min-width: 300px;
      max-height: 350px;
      background: #f4f4f4;
      padding: 1rem 1.2rem;
      margin-top: 32px;
    }
  }
  
</style>
