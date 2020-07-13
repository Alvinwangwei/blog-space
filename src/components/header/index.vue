<template>
  <header class="head">
    <div class="logoBox">
      <img class="logo" alt="log" :src="require('assets/images/logo.jpeg')" />
    </div>
    <div class="name">北枫de夏天</div>
    <div class="menu">
      <div class="menuItem" :class="[item.isActive ? 'active' : '']" v-for="(item, idx) in menus">{{item.name}}</div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: '首页',
          value: '/home',
          isActive: true
        },
        {
          name: '归档',
          value: '/file',
          isActive: false
        },
        {
          name: '标签',
          value: '/tag',
          isActive: false
        },
        {
          name: '笔记',
          value: '/note',
          isActive: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.head {
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 24px;
}
.head-left {
   width: 160px;
}
.logoBox {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.logo {
  width: 50px;
}
.name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  padding-left: 16px;
} 
.menu {
  display: flex;
  margin-left: auto;
}
.menuItem {
  margin-left: 24px;
  padding-bottom: 3px;
}
.menuItem:nth-of-type(1) {
  margin-left: 0;
}
.menuItem.active {
  border-bottom: 2px solid #46bd87;
}
</style>