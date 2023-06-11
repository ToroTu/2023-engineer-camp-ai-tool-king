<script setup>
defineProps({
  title: String,
  content: String,
});

</script>

<template>
  <div class="jk-relative question">
    <input
      class="jk-w-0 jk-h-0 jk-block before:jk-block before:jk-absolute before:jk-top-0 before:jk-left-0 before:jk-w-full before:jk-h-full before:jk-z-10 before:jk-cursor-pointer"
      type="checkbox" />
    <div class="jk-p-5 question-wrap jk-rounded-2xl jk-text-black-0 jk-transition-all md:jk-px-10">
      <div class="text-heading-6 bold jk-flex jk-items-center">
        <span class="material-icons jk-text-[1.2em] jk-mr-5 icon-add"> add </span>
        <span class="material-icons jk-text-[1.2em] jk-mr-5 jk-hidden icon-remove"> remove </span>
        <p class="jk-flex-1">{{ title }}</p>
      </div>
      <p
        class="text-body jk-ml-11 jk-overflow-hidden jk-max-h-0 before:jk-block before:jk-pt-4 jk-transition-all jk-duration-300 question-content">
        {{ content }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/variable';

.question-wrap {
  box-shadow: inset 0 0 0 1px $color-black-80;
}

.question {
  &>input:hover+.question-wrap {
    box-shadow: inset 0 0 0 1px $color-black-0;
  }

  &>input:checked+.question-wrap {
    box-shadow: inset 0 0 0 2px $color-black-0;

    .icon-add {
      display: none;
    }

    .icon-remove {
      display: inline-block;
    }

    &>.question-content {
      max-height: 32rem;
    }
  }
}
</style>
