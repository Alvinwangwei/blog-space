<template>
  <div class="user">
    <a-avatar 
    class="avatar" 
    size="large"
    shape="circle"
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <div><span>Alvin Wang</span></div>
    <a-row>
      <a-col :span="12">
        <a-statistic title="文章" :value="42" />
      </a-col>
      <a-col :span="12">
        <a-statistic title="标签" :value="11" />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'UserInfo',
  components: {},
  setup() {
    return {
    };
  },
  

  created() {
  }
});
</script>


<style scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 0;
}
.avatar {
  border: 1px solid #ccc;
}
</style>