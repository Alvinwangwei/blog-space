<template>
  <div class="article">
    <div class="content">
      <div class="article-info">
        <div class="article-title">
          <div>{{ articleState.title }}</div> 
        </div>

        <div class="article-desc">
          <span class="article-desc__date">{{ articleState.date }}</span>
          <span>
            <EyeOutlined class="article-desc__icon" />
            <span class="article-desc__times">0</span>
          </span>
        </div>

        <div class="article-content">
          <div v-html="articleState.content"></div>
        </div>
      </div>

      <div class="article-catalogue">
          <div class="article-catalogue__title">目录</div>
          <ul>
            <li>指令</li>
            <li>混入</li>
            <li>表单验证</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
 import { EyeOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'Article',
  components: {
    EyeOutlined,
  },
  setup() {
    const articleState = reactive({
      title: '组件库源码中这些写法你掌握了吗？',
      date: '2020/07/14 10:02:59',
      content: '<div>content</div>'
    })
    onMounted(() => {
    })
    return {
      articleState,
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

    .article-title {
      font-size: 28px;
      color: #333;
      font-weight: 500;
    }

    .article-desc {
      display: flex;
      justify-content: space-between;
      &__date{
        margin-top: 8px!important;
        color: #909399;
        font-size: 14px;
      }
      &__icon {
        font-size: 20px;
      }
      &__times {
        font-size: 18px;
        color: #555;
        margin-left: 5px;
      }
    }

    .article-catalogue {
      min-width: 300px;
      max-height: 350px;
      background: #f4f4f4;
      padding: 1rem 1.2rem;
      margin-top: 32px;
    }

    .article-content {
      padding-top: 20px;
    }
  }
  
</style>
