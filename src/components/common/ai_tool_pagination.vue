<script setup>
import { computed } from 'vue';

const props = defineProps({
  totalPages: {
    type: Number,
    default: 1,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  hasPre: {
    type: Boolean,
    default: false,
  },
  hasNext: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['change']);

const btnList = computed(() => {
  const list = [];
  /** 最多按鈕數(包含左右按鈕) */
  let maxCount = 6;
  props.hasPre && (maxCount -= 1);
  props.hasNext && (maxCount -= 1);
  let startNum = props.currentPage - 1;
  startNum - 1 < 1 && (startNum = 1);
  let endNum = startNum + maxCount - 1;
  if (endNum > props.totalPages) {
    endNum = props.totalPages;
    startNum = endNum - maxCount + 1;
    startNum < 1 && (startNum = 1);
  } else {
    endNum = startNum + maxCount - 1;
  }

  for (let i = startNum; i <= endNum; i += 1) {
    list.push(i);
  }
  return list;
});

const onPrev = () => {
  emit('change', props.currentPage - 1);
};

const onNext = () => {
  emit('change', props.currentPage + 1);
};

const onSkip = (page) => {
  emit('change', page);
};

</script>

<template>
  <div class="pagination jk-mt-8 jk-flex jk-justify-center lg:jk-mt-10 lg:jk-justify-end">
    <button v-if="hasPre"
      class="jk-text-black-100 jk-mr-1 text-small bold jk-rounded-2xl jk-align-bottom jk-w-12 jk-h-12 jk-px-1 jk-box-border"
      type="button" @click="onPrev()">
      <span class="material-icons"> keyboard_arrow_left </span>
    </button>
    <ul class="jk-flex">
      <li v-for="pageNum in btnList" :key="pageNum" class="jk-ml-1 first-of-type:jk-ml-0">
        <button class="text-small bold jk-rounded-2xl jk-align-bottom jk-w-12 jk-h-12 jk-px-1 jk-box-border"
          :class="currentPage != pageNum ? 'jk-text-black-100' : 'jk-bg-black-100 jk-text-black-0'" type="button"
          @click="onSkip(pageNum)">{{ pageNum }}</button>
      </li>
    </ul>
    <button v-if="hasNext"
      class="jk-text-black-100 jk-ml-1 text-small bold jk-rounded-2xl jk-align-bottom jk-w-12 jk-h-12 jk-px-1 jk-box-border"
      type="button" @click="onNext()">
      <span class="material-icons"> keyboard_arrow_right </span>
    </button>
  </div>
</template>