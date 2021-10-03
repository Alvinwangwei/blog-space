<template>
  <div class="blog">
    <!-- 头像 -->
    <div class="avatar"></div>

    <div class="name">Alvin Wang</div>

    <div class="statistics">
      <div class="article statistic-item">
        <div class="statistic-title">文章</div>
        <div class="statistics-number">0</div>
      </div>
      <div class="tag statistic-item">
        <div class="statistic-title">标签</div>
        <div class="statistics-number">0</div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'BlogInfo',
  components: {},
  setup() {
    return {
    };
  },
  

  created() {
  }
});
</script>


<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 0;
  width: 100%;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: url('https://images.unsplash.com/photo-1593085512500-5d55148d6f0d') no-repeat center;
  background-size: contain;
  overflow: hidden;
}

.name {
  text-align: center;
  font-weight: 600;
  padding-top: 8px;
}

.statistics {
  display: flex;
  align-items: center;
  padding: 12px 0;
  width: 100%;
  font-size: 16px;

  .statistic-item {
    flex: 1;
    text-align: center;
  }

  .statistic-number {
    font-weight: 500;
  }
}
</style>