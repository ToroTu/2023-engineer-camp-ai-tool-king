<script setup>
import { MAP_ROUTE_PATH } from '../enums';

</script>

<template>
  <nav
    class="jk-z-sidebar jk-fixed jk-top-0 jk-right-0 jk-h-full jk-text-black-0 jk-overflow-hidden jk-box-border jk-bg-black-100 jk-w-0 md:!jk-hidden">
    <div class="jk-w-screen jk-h-full jk-px-3 jk-box-border">
      <div class="wrap jk-flex jk-flex-col jk-box-border jk-h-full">
        <ul class="text-display-3 bold jk-flex jk-flex-col jk-justify-center jk-text-center jk-flex-1">
          <li class="jk-w-full">
            <router-link class="jk-inline-block jk-align-bottom" :to="MAP_ROUTE_PATH.HOME">首頁</router-link>
          </li>
          <li class="jk-w-full jk-mt-2">
            <router-link class="jk-inline-block jk-align-bottom" :to="MAP_ROUTE_PATH.PRICING">定價</router-link>
          </li>
        </ul>
        <div class="text-body bold jk-py-8 jk-border-t jk-border-solid jk-border-black-0">
          <p class="jk-mb-9">AI工具王 © 2023</p>
          <ul class="jk-flex jk-items-center">
            <li>
              <a class="jk-block" href="javascript:void(0);">Facebook</a>
            </li>
            <li class="jk-ml-5">
              <a class="jk-block" href="javascript:void(0);">Twitter</a>
            </li>
            <li class="jk-ml-5">
              <a class="jk-block" href="javascript:void(0);">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
