<script setup>

defineProps({
  /** 組件名/標籤名 */
  tag: {
    type: [String, Object, Function],
    default: 'a',
  },
});
</script>

<template>
  <component :is="tag" class="banner-btn-start">
    <slot></slot>
  </component>
</template>

<style lang="scss">
@import '../../styles/variable';

.banner-btn-start {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 10rem;
  padding: 1.25rem;
  color: inherit;
  cursor: pointer;
  vertical-align: bottom;
  text-decoration: none;
  box-shadow: inset 0 0 0 1px $color-black-0;
  border-radius: 1rem;
  transition: all 0.28s;
}

.banner-btn-start:hover {
  color: $color-black-100;
  background-color: $color-black-20;
}
</style>
