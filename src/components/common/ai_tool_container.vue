<script setup>
/// <reference path="../../types/index.js" />

import { computed, ref } from 'vue';
import { getDataList } from '../../services/index';
import AiToolPagination from './ai_tool_pagination.vue';
import AiToolSearch from './ai_tool_search.vue';


/** @type {import('vue').Ref<WorksData>} */
const searchData = ref(null);
/** 欲請求頁數 */
const tempPage = ref(1);
/** 請求參數 */
let searchParams = null;

const dataList = computed(() => searchData.value?.data || []);
const paginationConfig = computed(() => ({
  ...searchData.value?.page,
  current_page: Number(searchData.value?.page?.current_page),
}) || {});

/**
 * 取得資料搜尋結果
 */
const getSearch = async (params) => {
  params && (searchParams = params);
  const data = await getDataList({
    ...searchParams,
    page: tempPage.value || 1,
  });
  searchData.value = data;
  tempPage.value = searchData.value.page.current_page;
};

const onChangePagination = (page) => {
  tempPage.value = page;
  getSearch();
};

</script>

<template>
  <!-- 工具王 - 搜尋、篩選 -->
  <AiToolSearch @search="getSearch($event)"></AiToolSearch>
  <slot :data="dataList"></slot>
  <!-- 分頁 -->
  <AiToolPagination :total-pages="paginationConfig.total_pages || 1" :current-page="paginationConfig.current_page || 1"
    :has-pre="paginationConfig.has_pre" :has-next="paginationConfig.has_next" @change="onChangePagination($event)">
  </AiToolPagination>
</template>