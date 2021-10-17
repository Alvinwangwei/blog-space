<template>
  <div class="article">
    <div class="content">
      <div class="article-info">
        <div class="article-title">
          <div>{{ articleInfo.title }}</div> 
        </div>

        <div class="article-desc">
          <span class="article-desc__date">{{ articleInfo.date }}</span>
          <span>
            <EyeOutlined class="article-desc__icon" />
            <span class="article-desc__times">{{ articleInfo.views }}</span>
          </span>
        </div>

        <div class="article-content">
          <div v-html="articleInfo.content"></div>
        </div>
      </div>

      <!-- <div class="article-catalogue">
          <div class="article-catalogue__title">目录</div>
          <ul>
            <li>指令</li>
            <li>混入</li>
            <li>表单验证</li>
          </ul>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import { EyeOutlined } from '@ant-design/icons-vue';
import { getArticleInfo } from '@/api/article';
import { useRoute } from 'vue-router';

interface IArticleState {
  articleInfo: any;
}

export default defineComponent({
  name: 'Article',
  components: {
    EyeOutlined,
  },
  setup() {
    const articleState = reactive<IArticleState>({
      articleInfo: {
        title: '',
        date: '',
        content: '', 
        views: 0,
      },
    })

    const route = useRoute();
    const loadArticleInfo = async() => {
      const params = {
        id: route.query.id
      };
      const res: any = await getArticleInfo(params);
      articleState.articleInfo = {
        title: res.article_title,
        date: res.create_time,
        content: res.article_content, 
        views: res.article_views,
      };
    }

    onMounted(() => {
      loadArticleInfo();
    })
    return {
      ...toRefs(articleState),
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
