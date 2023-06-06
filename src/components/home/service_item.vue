<script setup>
defineProps({
  /** 組件名/標籤名 */
  tag: {
    type: String,
    default: 'div',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <component :is="tag"
    class="jk-py-10 jk-px-5 jk-border jk-border-solid jk-border-black-80 jk-rounded-2xl lg:jk-flex-1 lg:jk-py-20 lg:jk-px-10">
    <slot name="icon" :klass="'jk-text-[5rem] jk-align-bottom'"></slot>
    <h3 class="text-heading-3 bold jk-my-5 jk-text-black-0">{{ title }}</h3>
    <p class="text-body jk-text-black-20">{{ description }}</p>
  </component>
</template>
