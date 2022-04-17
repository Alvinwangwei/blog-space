<template>
  <div class="article">
    <a-card class="article-header">
      <a-button type="primary" @click="onCreateArticle">创建</a-button>
    </a-card>

    <div class="article-list">
      <a-table :dataSource="articleList" :columns="columns" rowKey="id" size="small">
        <template #action="{ record }">
          <a style="margin-right: 12px" @click="onEditArticle(record)">编辑</a>
          <a style="margin-right: 12px">详情</a>
          <a @click="onDeleteArticle(record)">删除</a>
        </template>
      </a-table>
    </div>

    <ArticleEdit ref="articleEditRef" @success="loadTableData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from 'vue';
import { getArticleList, deleteArticle } from '@/api/article'
import { useRouter } from 'vue-router';
import ArticleEdit from './components/ArticleEdit.vue';

const getColums = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
  },
  {
    title: '创建人',
    dataIndex: 'create_by',
    key: 'create_by',
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
]

interface IArticleState {
  articleList: any[];
  visible: boolean;
}

export default defineComponent({
  components: {
    ArticleEdit,
  },

  setup() {

    const articleEditRef = ref();

    const articleState = reactive<IArticleState>({
      articleList: [],
      visible: false,
    });

    const loadTableData = async() => {
      const res: any = await getArticleList({});
      articleState.articleList = res;
    }

    const router = useRouter();

    const onCreateArticle = () => {
      articleEditRef.value.showDrawer();
    }

    const onDeleteArticle = async (record: any) => {
      const params = {
        id: record.id
      }
      const res = await deleteArticle(params);
      console.log(res)
    }

    const onEditArticle = (record: any) => {
      articleEditRef.value.showDrawer(record);
    }

    onMounted(() => {
      loadTableData()
    });

    return {
      ...toRefs(articleState),
      columns: getColums,
      onCreateArticle,
      articleEditRef,
      onDeleteArticle,
      onEditArticle,
      loadTableData
    };
  }
});
</script>

<style scoped>
  .article {
    height: 100%;
    padding: 12px;
  }
  .article-header {
    margin-bottom: 10px;
    text-align: right;
  }
</style>
