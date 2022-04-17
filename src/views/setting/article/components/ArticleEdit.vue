<template>
  <a-drawer
    title="创建文章"
    :width="520"
    :visible="visible"
    :body-style="{ paddingBottom: '80px' }"
    @close="onClose"
  >
    <a-form :model="form" :rules="rules" ref="formRef">
      <a-form-item label="名称" name="title">
        <a-input v-model:value="form.title" placeholder="请输入文章标题" />
      </a-form-item>
      <a-form-item label="描述" name="desc">
        <a-textarea v-model:value="form.desc" placeholder="请输入文章标题" :rows="4" />
      </a-form-item>
    </a-form>
    <div
      :style="{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        background: '#fff',
        textAlign: 'right',
        zIndex: 1,
      }"
    >
      <a-button style="margin-right: 8px" @click="onClose">取消</a-button>
      <a-button type="primary" @click="onSubmit">确定</a-button>
    </div>
  </a-drawer>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { updateArticle } from '@/api/article'

export default defineComponent({
  components: {},
  emits: ['success'],
  setup(_, { emit }) {
    const formRef = ref();
    const articleInfo = ref<any>();

    const form = reactive({
      title: '',
      desc: ''
    });

    const rules = {
      title: [{ required: true, message: '请输入名称' }],
      desc: [{ required: true, message: '请输入描述' }],
    };

    const visible = ref<boolean>(false);

    const showDrawer = (record: any) => {
      if(record) {
        articleInfo.value = record;
        form.title = record.title;
        form.desc = record.desc;
      }
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };

    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          const params: any = {
            title: form.title,
            desc: form.desc
          }
          if(articleInfo.value && articleInfo.value.id) {
            params.id = articleInfo.value.id;
          }
          const res:any = updateArticle(params);
          if(res) {
            onClose();
            emit('success')
          }
        })
    }
    return {
      form,
      formRef,
      rules,
      visible,
      showDrawer,
      onClose,
      onSubmit,
    };
  },
});
</script>

