<script setup>
/// <reference path="../../types/index.js" />

import { onMounted, ref } from 'vue';
import AiToolSearchTags from './ai_tool_search_tags.vue';
import AiToolSortButten from './ai_tool_sort_butten.vue';
import AiToolFilterButten from './ai_tool_filter_butten.vue';

const emit = defineEmits(['search']);

/** 
 * 標籤列表
 * @type {TagItem[]}
 */
const tags = [
  {
    id: "all",
    name: "全部",
    value: "",
  },
  {
    id: 1,
    name: '問答服務',
    value: '問答服務',
  },
  {
    id: 2,
    name: '虛擬客服',
    value: '虛擬客服',
  },
  {
    id: 3,
    name: '生活應用',
    value: '生活應用',
  },
  {
    id: 4,
    name: '程式知識',
    value: '程式知識',
  },
  {
    id: 5,
    name: '翻譯助手',
    value: '翻譯助手',
  },
  {
    id: 6,
    name: '行銷文案',
    value: '行銷文案',
  },
];
/** 已選擇標籤 */
const selectedTag = ref(tags[0]);

/** 排序選項列表 */
const sortOptions = [
  {
    id: 1,
    name: '由新到舊',
    value: 0,
  },
  {
    id: 2,
    name: '由舊到新',
    value: 1,
  }
];
/** 已選擇排序選項 */
const selectedSort = ref(sortOptions[0]);
/** 搜尋文字 */
const searchInput = ref('');
/** 參考 搜尋輸入框 */
const refInput = ref(null);
/** 是否Focus */
let isFocus = false;

/** 監聽更新排序選項 */
const onUpdateSort = (item) => {
  selectedSort.value = item;
  getSearch();
};

/** 監聽更新標籤選項 */
const onUpdateTag = (item) => {
  selectedTag.value = item;
  getSearch();
};

const onBlur = () => {
  if (isFocus) {
    isFocus = false;
    getSearch();
  }
};

/** 監聽表單送出 */
const onSubmit = (e) => {
  e.preventDefault();
  if (isFocus) {
    isFocus = false;
    refInput.value.blur();
  }
  getSearch();
  return false;
};

/** 觸發資料搜尋 */
const getSearch = () => {
  emit('search', {
    search: searchInput.value || undefined,
    type: selectedTag.value.value || undefined,
    sort: selectedSort.value.value,
  });
};

onMounted(() => {
  getSearch();
});

</script>

<template>
  <form @submit="onSubmit($event)">
    <label
      class="text-body jk-flex jk-items-center jk-mb-4 jk-py-5 jk-px-10 jk-text-black-60 jk-bg-black-20 jk-rounded-2xl lg:jk-mb-6">
      <span class="material-icons jk-text-2xl jk-leading-none">search</span>
      <input ref="refInput"
        class="text-body jk-flex-1 jk-ml-3 jk-p-0 jk-text-inherit jk-bg-transparent jk-border-none jk-outline-none"
        type="text" placeholder="輸入關鍵字搜尋" name="search" v-model="searchInput" @focus="isFocus = true"
        @blur="onBlur($event)" />
    </label>
    <div class="jk-flex jk-flex-wrap jk-justify-between">
      <AiToolFilterButten disabled></AiToolFilterButten>
      <div class="tags-wrap jk-order-1 jk-overflow-hidden jk-w-screen -jk-mx-3 jk-mt-4 jk-text-black-60">
        <AiToolSearchTags :items="tags" :selected-item="selectedTag" @update:selected-item="onUpdateTag($event)">
        </AiToolSearchTags>
      </div>
      <AiToolSortButten name="sort" :items="sortOptions" :selected-item="selectedSort"
        @update:selected-item="onUpdateSort($event)"></AiToolSortButten>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@media (min-width: 1040px) {
  .tags-wrap {
    align-self: center;
    width: auto;
    margin-top: 0;
    order: 0;
  }
}
</style>