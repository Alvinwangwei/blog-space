<template>
  <div class="home">
    <div class="content">
      <div class="article-box">
        <div v-for="item in articleList" :key="item.id" class="article-item">
          <div class="article-title" @click="onViewDetail(item)">
            <span>{{ item.title }}</span>
          </div>
          <div class="article-desc">
            <span>{{ item.desc }}</span>
          </div>
          <div class="article-info">
            <span>更新时间: {{ item.updateTime }}</span>
          </div>
        </div>
      </div>
      <div class="info-box">
        <BlogInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import BlogInfo from './components/BlogInfo.vue';
import { useRouter } from 'vue-router';
import { getArticleList } from '@/api/article'

interface IArticle {
  id: Number,
  title: string,
  desc: string,
  createTime?: string,
  updateTime?: string,
  createBy?: string,
  img?: string,
  tag?: string,
  viewNum?: number,
  likeNum?: number,
  commentNum?: number,
}

interface IHomeState {
  articleList: IArticle[];
}

export default defineComponent({
  name: 'Home',
  components: {
    BlogInfo,
  },
  setup() {
    const router = useRouter()

    const homeState = reactive<IHomeState>({
      articleList: [],
    })

    const onViewDetail = (item: any) => {
      router.push({
        name: 'Article',
        query: {
          id: item.id,
       }
      })
    }

    const onGetArticleList = async() => {
      const res: any = await getArticleList({});
      console.log('onGetArticleList', res);
      homeState.articleList = res.map((item: IArticle) => {
        return {
          id: item.id,
          title: item.title,
          desc: item.desc,
          updateTime: item.updateTime,
        }
      });
    }

    onMounted(() => {
      onGetArticleList();
    })
    return {
      ...toRefs(homeState),
      onViewDetail,
    }
  }
});
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;

    .content {
      position: relative;
      display: flex;
      height: 100%;
      width: 90%;
      margin: 0 auto;
      padding-top: 20px;
    }

    .article-box {
      flex: 1;
      color: #333;
      .article-item {
        padding: 16px 12px;
        background: #fff;
        margin-bottom: 12px;
      }

      .article-title {
        font-size: 16px;
        font-weight: 500;
        padding-bottom: 12px;
        cursor: pointer;
      }

      .article-desc {
        color: #86909c;
        font-size: 13px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding-bottom: 12px;
      }

      .article-info {
        font-size: 12px;
      }
    }

    .info-box {
      width: 260px;
      margin-left: 50px;
    }
  }
</style>
