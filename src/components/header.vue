<script setup>
import { MAP_ROUTE_PATH } from '../enums';

</script>

<template>
  <header class="jk-z-header jk-sticky jk-top-0 jk-left-0 jk-w-full jk-px-3 jk-box-border jk-bg-black-100 md:jk-px-6">
    <div
      class="wrap jk-flex jk-justify-between jk-items-center jk-box-border jk-py-5 jk-border-b jk-border-solid jk-border-black-0 md:jk-py-4">
      <router-link class="jk-block jk-h-6 hover:jk-opacity-80 md:jk-h-10" :to="MAP_ROUTE_PATH.HOME">
        <img class="jk-block jk-h-full"
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/logo.png?raw=true"
          alt="logo" />
      </router-link>
      <button
        class="jk-relative jk-p-2 jk-text-black-0 jk-bg-transparent jk-border-none jk-outline-none jk-cursor-pointer hover:jk-opacity-80 hover:jk-bg-black-0/10 md:!jk-hidden"
        type="button">
        <span class="material-icons jk-block jk-text-[1.5rem] icon-menu">menu</span>
        <span class="material-icons jk-hidden jk-text-[1.5rem] icon-close">close</span>
        <label class="jk-absolute jk-top-0 jk-left-0 jk-right-0 jk-bottom-0 jk-block jk-cursor-pointer"
          for="nav-toggle-checkbox"></label>
      </button>
      <ul class="jk-hidden md:jk-flex text-body bold">
        <li>
          <router-link class="jk-block jk-py-3" :to="MAP_ROUTE_PATH.HOME">首頁</router-link>
        </li>
        <li class="jk-ml-5">
          <router-link class="jk-block jk-py-3" :to="MAP_ROUTE_PATH.PRICING">定價</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss"></style>
