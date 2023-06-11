<script setup>
/// <reference path="../../types/index.js" />

/**
 * @type {{ 
 *  items: TagItem[];
 *  selectedItem: TagItem|null; 
 * }}
 */
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  selectedItem: {
    type: Object,
    default: () => null,
  },
});

const emit = defineEmits(["update:selectedItem"]);

</script>

<template>
  <ul class="tool-tags-wrap jk-flex jk-items-center jk-px-2 jk-whitespace-nowrap jk-overflow-x-auto">
    <li v-for="item in items" :key="item.id" class="jk-mx-1">
      <label class="tool-tag jk-block jk-relative jk-rounded-2xl jk-overflow-hidden jk-cursor-pointer"
        @click="emit('update:selectedItem', item)">
        <span class="jk-block text-body jk-py-2 jk-px-4" :class="{ 'checked': selectedItem?.id === item.id }">{{ item.name
        }}</span>
      </label>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '../../styles/variable';

.tool-tags-wrap {
  &::-webkit-scrollbar {
    display: none;
  }
}

.tool-tag {
  span.checked {
    color: $color-black-100;
    font-weight: $text-bold;
    background-color: $color-black-20;
  }

  &:hover>span {
    background-color: $color-black-20;
  }
}
</style>
