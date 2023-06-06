<script setup>
import { MAP_ROUTE_PATH } from '../enums';

/**
 * 監聽置頂滾動
 */
const onScrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

</script>

<template>
  <footer class="jk-px-3 md:jk-px-6">
    <div
      class="wrap jk-border-t jk-border-solid jk-border-black-0 jk-py-20 jk-flex jk-flex-col jk-items-start md:jk-flex-row-reverse md:jk-justify-between">
      <img class="jk-block jk-h-10 jk-mb-10"
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/logo.png?raw=true" alt="logo" />
      <ul class="text-heading-1 bold lg:text-display-3 lg:bold">
        <li>
          <router-link :to="MAP_ROUTE_PATH.HOME">首頁</router-link>
        </li>
        <li class="jk-mt-2">
          <router-link :to="MAP_ROUTE_PATH.PRICING">定價</router-link>
        </li>
      </ul>
    </div>
    <div
      class="wrap text-body bold jk-text-black-0 jk-border-t jk-border-solid jk-border-black-0 jk-py-5 jk-flex jk-flex-wrap jk-items-center jk-justify-between">
      <p class="jk-py-3 jk-whitespace-nowrap">AI工具王 © 2025<span
          class="md:jk-inline-block md:jk-w-[calc(10vw-36.8px)] lg:jk-w-[6.25rem]"></span></p>
      <ul class="jk-w-full jk-mt-3 jk-flex jk-order-1 md:jk-mt-0 md:jk-w-auto md:jk-order-none md:jk-mr-auto">
        <li>
          <a class="jk-block jk-py-3" href="javascript:void(0);">Facebook</a>
        </li>
        <li class="jk-ml-5">
          <a class="jk-block jk-py-3" href="javascript:void(0);">Twitter</a>
        </li>
        <li class="jk-ml-5">
          <a class="jk-block jk-py-3" href="javascript:void(0);">Instagram</a>
        </li>
      </ul>
      <button class="jk-inline-flex jk-items-center jk-py-3 jk-mx-3 md:jk-mr-0 hover:jk-opacity-80" type="button"
        @click="onScrollTop()">
        Back to top
        <span class="material-icons jk-ml-3 jk-text-[1em]"> arrow_upward </span>
      </button>
    </div>
  </footer>
</template>
