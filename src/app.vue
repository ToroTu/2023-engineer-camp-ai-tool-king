<script setup>
import Footer from './components/footer.vue';
import Header from './components/header.vue';
import Sidebar from './components/sidebar.vue';

const onChange = (event) => {
  const { checked } = event.target;
  document.documentElement.style.setProperty('overflow', checked ? 'hidden' : '')
};

</script>

<template>
  <input class="header-nav-toggle-checkbox jk-absolute jk-hidden jk-opacity-0 jk-pointer-events-none" type="checkbox"
    name="nav-toggle" id="nav-toggle-checkbox" hidden @change="onChange($event)" />
  <!-- Header 頁首 -->
  <Header class="header"></Header>
  <!-- Sidebar 側邊導航 -->
  <Sidebar class="sidebar"></Sidebar>
  <!-- 主文 -->
  <main class="jk-px-3 md:jk-px-6">
    <router-view></router-view>
  </main>
  <!-- 頁尾 -->
  <Footer></Footer>
</template>

<style lang="scss" scoped>
.sidebar {
  padding-top: 1.25rem * 2 + 0.5rem * 2 + 1.5rem;
  transition: width 0.3s;
}

.header-nav-toggle-checkbox:checked~.header :deep(.icon-menu) {
  display: none;
}

.header-nav-toggle-checkbox:checked~.header :deep(.icon-close) {
  display: block;
}

.header-nav-toggle-checkbox:checked~.sidebar {
  width: 100vw;
}
</style>
