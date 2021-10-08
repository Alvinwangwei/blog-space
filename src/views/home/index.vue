<template>
  <div class="home">
    <!-- home -->
    <div class="home-header">
      <div class="home-header__banner" :style="{ backgroundImage: `url(${bannerImg})`}">
        <div class="avatar"></div>
        <div class="desc-wrapper">
          <div class="desc">把你的脸迎朝阳光</div>
          <div class="subDesc">Have a nice day</div>
        </div>
      </div>
    </div>

    <div class="home-content">
      <div class="article-box">
        <a-card v-for="item in articleList" :key="item.id" class="article-item">
          <div class="article-title" @click="onViewDetail(item)">{{ item.title }}</div>
          <div class="article-date">{{ item.createTime }}</div>
        </a-card>
      </div>
      <div class="blog-info">
        <a-card style="width: 300px">
          <BlogInfo />
        </a-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import BlogInfo from '@/components/BlogInfo.vue';
import { useRouter } from 'vue-router';
import { getArticleList } from '@/api/article'

// const getArticleList: any[] = [
//   {
//     id: 1,
//     title: '如何将 Vue2 代码一键转成 Vue3 代码',
//     createTime: '2021-10-01',
//   },
//   {
//     id: 2,
//     title: '如何将 Vue2 代码一键转成 Vue3 代码',
//     createTime: '2021-10-01',
//   },
//   {
//     id: 3,
//     title: '如何将 Vue2 代码一键转成 Vue3 代码',
//     createTime: '2021-10-01',
//   }
// ]


interface IArticle {
  title: string;
  createTime: string;
}

export default defineComponent({
  name: 'Home',
  components: {
    BlogInfo,
  },
  setup() {
     const router = useRouter()
    const bannerImgs = ['https://wallpaper.infinitynewtab.com/wallpaper/1762.jpg']

    let articleList = ref<IArticle[]>([]);

    const onViewDetail = (item: any) => {
      router.push({
        name: 'Article',
        query: {
          id: item.id,
       }
      })
    }

    const onGetArticleList = async() => {
      const res = await getArticleList({});
      // console.log(res);
    }

    onMounted(() => {
      // articleList.value = getArticleList.concat(getArticleList);
      onGetArticleList();
    })
    return {
      bannerImg: bannerImgs[0],
      articleList,
      onViewDetail,
    }
  }
});
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
  }
  .home-header {
    &__banner {
      width: 100%;
      height: 600px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: 500;
    }

    .avatar {
      width: 112px;
      height: 112px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 40px;
      background: url(https://infinityicon.infinitynewtab.com/user-share-icon/faa06f85d37cdd552e2e57cb282ad0f7.png?imageMogr2/thumbnail/260x/format/webp/blur/1x0/quality/100|imageslim) no-repeat center;
      background-size: cover;
    }

  .desc-wrapper {
    text-align: center;
    letter-spacing: 5px;
    text-indent: 5px;

    .desc {
      font-weight: 600;
      font-size: 28px;
    }

    .subDesc {
      margin-top: 30px;
      font-size: 1.2rem;
    }
  }
  }

  .home-content {
    width: 85%;
    margin: 0 auto;
    padding: 30px 24px;
    display: flex;

    .article-box {
      flex: 1;
    }

    .article-item {
      margin-bottom: 20px;
      background: #fff;
    }

    .article-title {
      font-size: 18px;
      color: #333;
      line-height: 1.5;
      font-weight: 500;
      cursor: pointer;
    }

    .article-date {
      font-size: 14px;
      color: rgba(0,0,0,.6);
      padding-top: 8px;
    }

    .blog-info {
      width: 25%;
      margin-left: 15px;
    }
  }
  
</style>
